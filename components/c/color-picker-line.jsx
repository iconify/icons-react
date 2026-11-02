import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hafzs9bbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hafzs9bbt"/>`,
		"fallback": "mingcute:color-picker-line",
	});
}

export default Component;
