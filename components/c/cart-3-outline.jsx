import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxwk-rpea.css';
import '../../css/h/huem-8yil.css';
import '../../css/o/o2slzjb_e.css';
import '../../css/b/bigv9mbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gxwk-rpea"/><path class="huem-8yil"/><path class="o2slzjb_e"/><path clip-rule="evenodd" class="bigv9mbpj"/></g>`,
		"fallback": "solar:cart-3-outline",
	});
}

export default Component;
