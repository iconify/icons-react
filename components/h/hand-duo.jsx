import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz48f76fn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz48f76fn"/>`,
		"fallback": "glyphs:hand-duo",
	});
}

export default Component;
