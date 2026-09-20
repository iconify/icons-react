import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vawvnbw5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vawvnbw5a"/>`,
		"fallback": "mingcute:flame-fill",
	});
}

export default Component;
