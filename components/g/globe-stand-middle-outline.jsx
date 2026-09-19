import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8qo2ibht.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8qo2ibht"/>`,
		"fallback": "glyphs:globe-stand-middle-outline",
	});
}

export default Component;
