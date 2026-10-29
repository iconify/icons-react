import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/czwvy50an.css';
import '../../css/s/sk0ha5box.css';
import '../../css/k/k4tj83qrr.css';
import '../../css/k/k9ddrkbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="czwvy50an"/><path class="sk0ha5box wm-k"/><path class="k4tj83qrr wm-k"/><path class="k9ddrkbna wm-a"/></g>`,
		"fallback": "withicons:avatar-fox-sketch",
	});
}

export default Component;
