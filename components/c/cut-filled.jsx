import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2jgm9-lp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2jgm9-lp"/>`,
		"fallback": "ix:cut-filled",
	});
}

export default Component;
