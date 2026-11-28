import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe8ee6b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe8ee6b0k"/>`,
		"fallback": "noviair:flame-x",
	});
}

export default Component;
