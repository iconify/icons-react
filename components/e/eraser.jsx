import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8-gdye2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8-gdye2r"/>`,
		"fallback": "streamline-plump:eraser",
	});
}

export default Component;
