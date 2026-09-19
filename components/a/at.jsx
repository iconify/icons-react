import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuhv4polx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuhv4polx"/>`,
		"fallback": "glyphs:at",
	});
}

export default Component;
