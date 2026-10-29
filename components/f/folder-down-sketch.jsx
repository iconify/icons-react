import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jw1_a3bff.css';
import '../../css/y/yz8i15ydf.css';
import '../../css/b/b59i1cc7c.css';
import '../../css/q/qmr9gv51z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jw1_a3bff"/><path class="wm-a yz8i15ydf"/><path class="b59i1cc7c wm-k"/><path class="qmr9gv51z wm-a"/></g>`,
		"fallback": "withicons:folder-down-sketch",
	});
}

export default Component;
