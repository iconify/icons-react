import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd876c3xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd876c3xz"/>`,
		"fallback": "streamline-sharp:give-gift",
	});
}

export default Component;
