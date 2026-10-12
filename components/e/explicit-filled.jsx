import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hw7kb0bad.css';
import '../../css/f/fpuyb9bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hw7kb0bad"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/></g>`,
		"fallback": "andrsrxn:explicit-filled",
	});
}

export default Component;
