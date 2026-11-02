import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vziw5eblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vziw5eblq"/>`,
		"fallback": "mingcute:audio-tape-fill",
	});
}

export default Component;
