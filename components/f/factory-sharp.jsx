import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncwy8z9pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncwy8z9pm"/>`,
		"fallback": "pixelarticons:factory-sharp",
	});
}

export default Component;
