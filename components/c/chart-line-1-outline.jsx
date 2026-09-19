import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw0g4dbju.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xw0g4dbju"/>`,
		"fallback": "glyphs:chart-line-1-outline",
	});
}

export default Component;
