import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkksefj0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mkksefj0r"/>`,
		"fallback": "streamline-plump:camera-1-remix",
	});
}

export default Component;
