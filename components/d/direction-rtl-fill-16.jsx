import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8tufhvwy.css';
import '../../css/y/y8-ea6dak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8tufhvwy"/><path class="y8-ea6dak"/>`,
		"fallback": "garden:direction-rtl-fill-16",
	});
}

export default Component;
