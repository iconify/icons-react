import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwr4clbuq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwr4clbuq"/>`,
		"fallback": "glyphs:hexagon-bold",
	});
}

export default Component;
