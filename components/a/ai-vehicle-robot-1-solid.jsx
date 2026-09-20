import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3q9vzbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3q9vzbzq"/>`,
		"fallback": "streamline-sharp:ai-vehicle-robot-1-solid",
	});
}

export default Component;
