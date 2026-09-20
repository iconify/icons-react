import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6me-pgos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6me-pgos"/>`,
		"fallback": "ix:ink-pen",
	});
}

export default Component;
