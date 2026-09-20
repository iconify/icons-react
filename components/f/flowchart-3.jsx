import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poeuz0b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poeuz0b_h"/>`,
		"fallback": "streamline-cyber:flowchart-3",
	});
}

export default Component;
