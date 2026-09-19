import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_p_-yrff.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_p_-yrff"/>`,
		"fallback": "glyphs:hash-duo",
	});
}

export default Component;
