import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7de9qbsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h7de9qbsf"/>`,
		"fallback": "streamline-plump:browser-code-1-remix",
	});
}

export default Component;
