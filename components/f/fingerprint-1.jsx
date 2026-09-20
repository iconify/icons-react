import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo-_1ub0c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo-_1ub0c"/>`,
		"fallback": "streamline-flex:fingerprint-1",
	});
}

export default Component;
