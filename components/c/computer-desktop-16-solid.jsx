import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_i0wab7f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_i0wab7f"/>`,
		"fallback": "heroicons:computer-desktop-16-solid",
	});
}

export default Component;
