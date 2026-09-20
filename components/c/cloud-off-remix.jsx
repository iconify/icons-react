import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy49fxt8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy49fxt8o"/>`,
		"fallback": "streamline-plump:cloud-off-remix",
	});
}

export default Component;
