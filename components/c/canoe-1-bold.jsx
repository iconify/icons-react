import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwk-aybvt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwk-aybvt"/>`,
		"fallback": "glyphs:canoe-1-bold",
	});
}

export default Component;
