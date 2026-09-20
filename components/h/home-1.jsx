import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji5q-_b8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji5q-_b8d"/>`,
		"fallback": "streamline-plump:home-1",
	});
}

export default Component;
