import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeak3x6ce.css';
import '../../css/u/uhxf3cb6o.css';
import '../../css/m/mxjjttnft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeak3x6ce"/><path class="uhxf3cb6o"/><path class="mxjjttnft"/>`,
		"fallback": "streamline-pixel:food-drink-rice-ball",
	});
}

export default Component;
