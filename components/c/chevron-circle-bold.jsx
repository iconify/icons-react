import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yom7c30uv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yom7c30uv"/>`,
		"fallback": "glyphs:chevron-circle-bold",
	});
}

export default Component;
