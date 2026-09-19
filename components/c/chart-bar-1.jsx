import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eixhrfb_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eixhrfb_d"/>`,
		"fallback": "glyphs:chart-bar-1",
	});
}

export default Component;
