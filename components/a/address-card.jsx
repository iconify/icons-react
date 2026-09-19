import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vloihibwj.css';

const viewBox = {"width":2048,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vloihibwj"/>`,
		"fallback": "fa:address-card",
	});
}

export default Component;
