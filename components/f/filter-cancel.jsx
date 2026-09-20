import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0xnpgqhr.css';
import '../../css/f/fv0uumbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0xnpgqhr"/><path clip-rule="evenodd" class="fv0uumbup"/></g>`,
		"fallback": "proicons:filter-cancel",
	});
}

export default Component;
