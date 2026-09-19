import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc30fdcem.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc30fdcem"/>`,
		"fallback": "zmdi:fullscreen-exit",
	});
}

export default Component;
