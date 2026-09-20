import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znyt_igof.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znyt_igof"/>`,
		"fallback": "pinhead:cheese-wedge",
	});
}

export default Component;
