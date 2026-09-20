import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlpokcbfc.css';
import '../../css/n/ns7i5fb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="hlpokcbfc"/><path class="ns7i5fb-z"/></g>`,
		"fallback": "lets-icons:color-mode",
	});
}

export default Component;
