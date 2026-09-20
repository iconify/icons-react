import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgwus178p.css';
import '../../css/h/hvx21_v2f.css';
import '../../css/n/n6b_t9v6u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cgwus178p"/><path class="hvx21_v2f"/><path class="n6b_t9v6u"/></g>`,
		"fallback": "streamline-flex-color:cloud-off",
	});
}

export default Component;
