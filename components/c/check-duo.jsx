import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu5teoz6e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu5teoz6e"/>`,
		"fallback": "glyphs:check-duo",
	});
}

export default Component;
