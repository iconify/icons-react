import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyn8p9byz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tyn8p9byz"/>`,
		"fallback": "glyphs:cross-bold",
	});
}

export default Component;
