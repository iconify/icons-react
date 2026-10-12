import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mse5hd4bm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mse5hd4bm"/>`,
		"fallback": "energy-icons:divide-48",
	});
}

export default Component;
