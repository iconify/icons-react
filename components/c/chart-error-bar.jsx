import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d42htuhxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d42htuhxs"/>`,
		"fallback": "ix:chart-error-bar",
	});
}

export default Component;
