import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojuqj5b0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojuqj5b0p"/>`,
		"fallback": "famicons:grid",
	});
}

export default Component;
