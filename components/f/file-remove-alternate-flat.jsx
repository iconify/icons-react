import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0_l5qbyk.css';
import '../../css/m/mkz33fzme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x0_l5qbyk"/><path class="mkz33fzme"/></g>`,
		"fallback": "streamline-color:file-remove-alternate-flat",
	});
}

export default Component;
