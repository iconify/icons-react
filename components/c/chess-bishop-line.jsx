import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic4q36b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic4q36b5m"/>`,
		"fallback": "mingcute:chess-bishop-line",
	});
}

export default Component;
