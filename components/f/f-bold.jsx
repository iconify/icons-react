import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko2r1eq8b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko2r1eq8b"/>`,
		"fallback": "glyphs:f-bold",
	});
}

export default Component;
