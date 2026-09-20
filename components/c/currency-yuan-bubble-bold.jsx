import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk8o22bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk8o22bjy"/>`,
		"fallback": "streamline-ultimate:currency-yuan-bubble-bold",
	});
}

export default Component;
