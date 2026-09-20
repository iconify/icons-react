import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji-te0b1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji-te0b1m"/>`,
		"fallback": "streamline-plump-color:arrow-cursor-1-flat",
	});
}

export default Component;
