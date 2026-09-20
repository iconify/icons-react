import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk8zo_-ji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xk8zo_-ji"/>`,
		"fallback": "streamline-plump:cable-split-remix",
	});
}

export default Component;
