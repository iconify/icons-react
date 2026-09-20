import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl8ogjbin.css';
import '../../css/v/vbn5-wb4u.css';

const viewBox = {"width":1440,"height":810};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG6nCoMc7C"><path class="zl8ogjbin"/></clipPath></defs><g clip-path="url(#SVG6nCoMc7C)"><path class="vbn5-wb4u"/></g>`,
		"fallback": "thesvg-color:farmsent",
	});
}

export default Component;
