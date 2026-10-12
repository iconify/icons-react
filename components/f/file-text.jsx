import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1w_r-g8i.css';
import '../../css/f/fchx4hbto.css';
import '../../css/l/lygsm7bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1w_r-g8i"/><path class="fchx4hbto"/><path class="lygsm7bzm"/></g>`,
		"fallback": "andrsrxn:file-text",
	});
}

export default Component;
