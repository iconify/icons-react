import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjv8-gbty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjv8-gbty"/>`,
		"fallback": "bi:folder2",
	});
}

export default Component;
