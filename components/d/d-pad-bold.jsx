import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn1r1dbvg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn1r1dbvg"/>`,
		"fallback": "glyphs:d-pad-bold",
	});
}

export default Component;
