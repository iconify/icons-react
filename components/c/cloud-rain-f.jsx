import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7y7ddcjv.css';
import '../../css/t/tp_md9bnt.css';
import '../../css/u/uch44xcum.css';
import '../../css/l/lkoadtbup.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7y7ddcjv"/><rect class="tp_md9bnt"/><rect class="uch44xcum"/><rect class="lkoadtbup"/></g>`,
		"fallback": "jam:cloud-rain-f",
	});
}

export default Component;
