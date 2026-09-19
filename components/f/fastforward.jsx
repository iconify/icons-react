import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys5e_r7yr.css';
import '../../css/e/ey1v8gbte.css';

const viewBox = {"width":16,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys5e_r7yr"/><path class="ey1v8gbte"/>`,
		"fallback": "formkit:fastforward",
	});
}

export default Component;
