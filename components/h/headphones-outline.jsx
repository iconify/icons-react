import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duxx7icww.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duxx7icww"/>`,
		"fallback": "glyphs:headphones-outline",
	});
}

export default Component;
