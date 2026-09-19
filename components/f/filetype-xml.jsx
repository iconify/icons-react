import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2owjgb5n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2owjgb5n"/>`,
		"fallback": "bi:filetype-xml",
	});
}

export default Component;
