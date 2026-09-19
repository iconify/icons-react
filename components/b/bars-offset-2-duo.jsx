import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4d1rx7fp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4d1rx7fp"/>`,
		"fallback": "glyphs:bars-offset-2-duo",
	});
}

export default Component;
