import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2d7u9biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2d7u9biy"/>`,
		"fallback": "ri:brush-ai-3-line",
	});
}

export default Component;
