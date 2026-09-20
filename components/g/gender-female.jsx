import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv9y25q_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv9y25q_k"/>`,
		"fallback": "mdi:gender-female",
	});
}

export default Component;
