import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/pe5iwv8nt.css';
import '../../css/o/o0o9wu-8v.css';
import '../../css/d/ddyhhlb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="pe5iwv8nt"/><path class="o0o9wu-8v"/><path class="ddyhhlb-n"/></g>`,
		"fallback": "matita:eraser",
	});
}

export default Component;
