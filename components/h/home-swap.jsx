import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epcmh2cns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epcmh2cns"/>`,
		"fallback": "mdi:home-swap",
	});
}

export default Component;
