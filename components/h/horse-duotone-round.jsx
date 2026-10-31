import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mol2-hbmr.css';
import '../../css/r/rsua0ubnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mol2-hbmr"/><path class="rsua0ubnr"/></g>`,
		"fallback": "coolicons:horse-duotone-round",
	});
}

export default Component;
