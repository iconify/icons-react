import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zahkbf3tz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zahkbf3tz"/>`,
		"fallback": "glyphs:align-side-duo",
	});
}

export default Component;
