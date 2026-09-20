import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7ex8kgyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7ex8kgyi"/>`,
		"fallback": "streamline-cyber:cannabis-leaf",
	});
}

export default Component;
