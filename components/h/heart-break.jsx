import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kz7v_hriw.css';
import '../../css/o/ok56wpbuh.css';
import '../../css/f/fsnrxv-br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kz7v_hriw"/><path class="ok56wpbuh"/><path class="fsnrxv-br"/></g>`,
		"fallback": "andrsrxn:heart-break",
	});
}

export default Component;
