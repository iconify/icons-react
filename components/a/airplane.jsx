import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu0undb1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu0undb1q"/>`,
		"fallback": "icon-park-solid:airplane",
	});
}

export default Component;
