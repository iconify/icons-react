import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0z73lbsv.css';

const viewBox = {"width":120,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0z73lbsv"/>`,
		"fallback": "thesvg-color:alpha-vantage",
	});
}

export default Component;
