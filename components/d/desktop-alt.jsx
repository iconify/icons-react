import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obj86qm_b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obj86qm_b"/>`,
		"fallback": "fa7-solid:desktop-alt",
	});
}

export default Component;
