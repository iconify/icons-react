import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uf8-wnb5o.css';
import '../../css/t/tllx82bmt.css';
import '../../css/l/la7lrkbrv.css';
import '../../css/z/zrz69756q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="uf8-wnb5o"/><circle class="tllx82bmt"/><circle class="la7lrkbrv"/><circle class="zrz69756q"/></g>`,
		"fallback": "thesvg:british-council",
	});
}

export default Component;
