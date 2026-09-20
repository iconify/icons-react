import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaitsdb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaitsdb2b"/>`,
		"fallback": "streamline-ultimate:focus-auto-1-bold",
	});
}

export default Component;
