import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjmap7bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjmap7bco"/>`,
		"fallback": "pixelarticons:battery-low-sharp",
	});
}

export default Component;
