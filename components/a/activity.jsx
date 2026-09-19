import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj35mhboz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj35mhboz"/>`,
		"fallback": "glyphs-poly:activity",
	});
}

export default Component;
