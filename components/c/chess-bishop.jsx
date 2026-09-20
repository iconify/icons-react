import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi89x8t3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi89x8t3b"/>`,
		"fallback": "tabler:chess-bishop",
	});
}

export default Component;
