import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve-_k2a0b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve-_k2a0b"/>`,
		"fallback": "flat-color-icons:flash-on",
	});
}

export default Component;
