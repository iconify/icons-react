import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9uj1qboq.css';
import '../../css/g/g8klr6byk.css';
import '../../css/m/mu_an1rnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9uj1qboq"/><path class="g8klr6byk"/><path class="mu_an1rnw"/></g>`,
		"fallback": "andrsrxn:file-txt",
	});
}

export default Component;
