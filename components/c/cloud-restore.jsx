import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw9v12bgw.css';
import '../../css/g/gfjzq0b4c.css';
import '../../css/e/ed335fbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aw9v12bgw"/><path class="gfjzq0b4c"/><path class="ed335fbvq"/></g>`,
		"fallback": "andrsrxn:cloud-restore",
	});
}

export default Component;
