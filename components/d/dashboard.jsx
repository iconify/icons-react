import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd8_36abv.css';
import '../../css/d/de8636buj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd8_36abv"/><path class="de8636buj"/>`,
		"fallback": "carbon:dashboard",
	});
}

export default Component;
