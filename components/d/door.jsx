import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il4iknbyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il4iknbyg"/>`,
		"fallback": "streamline-plump:door",
	});
}

export default Component;
