import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cik2l7bjg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cik2l7bjg"/>`,
		"fallback": "glyphs:hourglass-bold",
	});
}

export default Component;
