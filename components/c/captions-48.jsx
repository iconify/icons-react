import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq88i7qnu.css';
import '../../css/j/ju-kz0ttg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq88i7qnu"/><path class="ju-kz0ttg"/>`,
		"fallback": "energy-icons:captions-48",
	});
}

export default Component;
