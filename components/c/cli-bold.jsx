import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elmbf2wzd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elmbf2wzd"/>`,
		"fallback": "glyphs:cli-bold",
	});
}

export default Component;
