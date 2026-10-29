import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fgdsbjaos.css';
import '../../css/v/vj3c051re.css';
import '../../css/l/lb5ghwnjs.css';
import '../../css/s/s3hfz9bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fgdsbjaos wm-k"/><path class="vj3c051re wm-a"/><path class="lb5ghwnjs wm-k"/><path class="s3hfz9bmt wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-braids-sketch",
	});
}

export default Component;
