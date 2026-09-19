import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_j5ambxh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_j5ambxh"/>`,
		"fallback": "glyphs:globe-stand-east-outline",
	});
}

export default Component;
