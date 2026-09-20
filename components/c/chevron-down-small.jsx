import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gat7j1b1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gat7j1b1j"/>`,
		"fallback": "ix:chevron-down-small",
	});
}

export default Component;
