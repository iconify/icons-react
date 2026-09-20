import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp2-5gq9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp2-5gq9s"/>`,
		"fallback": "raphael:folder",
	});
}

export default Component;
