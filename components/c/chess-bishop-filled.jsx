import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc-_tnb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc-_tnb9q"/>`,
		"fallback": "boxicons:chess-bishop-filled",
	});
}

export default Component;
