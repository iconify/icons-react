import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngp646uqb.css';

const viewBox = {"width":464,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngp646uqb"/>`,
		"fallback": "file-icons:ckeditor",
	});
}

export default Component;
