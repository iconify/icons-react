import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d37wm6bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d37wm6bfc"/>`,
		"fallback": "mdi:home-lightning-bolt",
	});
}

export default Component;
