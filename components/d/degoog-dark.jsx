import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnm7m2cva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnm7m2cva"/>`,
		"fallback": "selfhst:degoog-dark",
	});
}

export default Component;
