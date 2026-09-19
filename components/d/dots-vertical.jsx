import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwa9t1wyp.css';
import '../../css/s/skr69mb3d.css';
import '../../css/k/k5jnlg1dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="fwa9t1wyp"/><rect class="skr69mb3d"/><rect class="k5jnlg1dk"/></g>`,
		"fallback": "humbleicons:dots-vertical",
	});
}

export default Component;
