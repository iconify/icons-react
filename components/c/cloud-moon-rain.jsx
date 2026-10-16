import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejrfq-ozy.css';
import '../../css/p/ptlx-7deu.css';
import '../../css/v/vwuw98g7k.css';
import '../../css/m/mb4ccfbkg.css';
import '../../css/e/eho_6aczg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ejrfq-ozy"/><path class="ptlx-7deu"/><path class="vwuw98g7k"/><path class="mb4ccfbkg"/><path class="eho_6aczg"/></g>`,
		"fallback": "andrsrxn:cloud-moon-rain",
	});
}

export default Component;
