import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/euohjtbeq.css';
import '../../css/e/eqsrjubfx.css';
import '../../css/c/cdgrumk9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="euohjtbeq wm-shadow"/><path class="eqsrjubfx wm-shadow"/><path class="cdgrumk9w"/></g>`,
		"fallback": "withicons-brutal:gold-ingot",
	});
}

export default Component;
