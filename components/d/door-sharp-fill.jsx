import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c92xfhcsq.css';
import '../../css/q/qothvdbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c92xfhcsq"/><path class="qothvdbsj"/></g>`,
		"fallback": "keyline-icons:door-sharp-fill",
	});
}

export default Component;
