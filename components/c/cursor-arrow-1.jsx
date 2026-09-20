import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxxtszp8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxxtszp8q"/>`,
		"fallback": "streamline-cyber:cursor-arrow-1",
	});
}

export default Component;
