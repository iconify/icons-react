import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/d/dw6sn-5xn.css';
import '../../css/a/al_sr02cy.css';
import '../../css/w/wjxuesbdi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="dw6sn-5xn"/><path class="al_sr02cy"/><path class="wjxuesbdi"/></g>`,
		"fallback": "skill-icons:haskell-dark",
	});
}

export default Component;
