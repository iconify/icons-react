import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsr46tb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsr46tb7k"/>`,
		"fallback": "mdi:eyedropper-off",
	});
}

export default Component;
