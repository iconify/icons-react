import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4e5mqb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4e5mqb5k"/>`,
		"fallback": "mingcute:chess-queen-line",
	});
}

export default Component;
