import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tybfk_b5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tybfk_b5b"/>`,
		"fallback": "famicons:cloud-done",
	});
}

export default Component;
