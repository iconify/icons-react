import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbxszfrsi.css';
import '../../css/c/c2s7492ws.css';
import '../../css/k/kxw7_zabv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nbxszfrsi"/><rect class="c2s7492ws"/><path class="kxw7_zabv"/></g>`,
		"fallback": "proicons:battery",
	});
}

export default Component;
