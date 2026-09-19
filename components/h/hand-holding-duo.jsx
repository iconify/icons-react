import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyq7mlb0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyq7mlb0v"/>`,
		"fallback": "glyphs:hand-holding-duo",
	});
}

export default Component;
