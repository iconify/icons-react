import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi5c-olvz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wi5c-olvz"/>`,
		"fallback": "glyphs:chart-bar-outline",
	});
}

export default Component;
