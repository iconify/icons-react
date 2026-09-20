import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms3s0gb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms3s0gb6k"/>`,
		"fallback": "uil:game",
	});
}

export default Component;
