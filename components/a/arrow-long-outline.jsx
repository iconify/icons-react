import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez1wi6bon.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ez1wi6bon"/>`,
		"fallback": "glyphs:arrow-long-outline",
	});
}

export default Component;
