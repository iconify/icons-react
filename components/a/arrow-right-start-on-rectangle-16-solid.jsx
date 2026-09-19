import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7_udwd8d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7_udwd8d"/>`,
		"fallback": "heroicons:arrow-right-start-on-rectangle-16-solid",
	});
}

export default Component;
