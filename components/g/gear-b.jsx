import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vva8lq2qc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vva8lq2qc"/>`,
		"fallback": "ion:gear-b",
	});
}

export default Component;
