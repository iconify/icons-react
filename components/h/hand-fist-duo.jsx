import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5f1l6b2a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5f1l6b2a"/>`,
		"fallback": "glyphs:hand-fist-duo",
	});
}

export default Component;
