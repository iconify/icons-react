import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy1qi8xwi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy1qi8xwi"/>`,
		"fallback": "carbon:folder-details-reference",
	});
}

export default Component;
