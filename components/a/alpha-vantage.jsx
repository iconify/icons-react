import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igv29e4iv.css';

const viewBox = {"width":120,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igv29e4iv"/>`,
		"fallback": "thesvg:alpha-vantage",
	});
}

export default Component;
