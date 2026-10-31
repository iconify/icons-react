import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qduqn3niy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qduqn3niy"/>`,
		"fallback": "coolicons:building-3-round",
	});
}

export default Component;
