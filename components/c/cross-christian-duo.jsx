import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isaosi6ly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isaosi6ly"/>`,
		"fallback": "glyphs:cross-christian-duo",
	});
}

export default Component;
