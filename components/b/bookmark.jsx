import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/intbrob7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="intbrob7i"/>`,
		"fallback": "streamline-plump:bookmark",
	});
}

export default Component;
