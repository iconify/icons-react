import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccqvq0_7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ccqvq0_7v"/>`,
		"fallback": "streamline-plump:heart-rate-pulse-graph-solid",
	});
}

export default Component;
