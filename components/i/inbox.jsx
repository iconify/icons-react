import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwhlb5yv.css';
import '../../css/z/z1isz9jsw.css';
import '../../css/l/lbtl-zbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbwhlb5yv"/><path class="z1isz9jsw"/><path class="lbtl-zbyj"/></g>`,
		"fallback": "andrsrxn:inbox",
	});
}

export default Component;
