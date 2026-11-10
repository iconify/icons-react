import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq09cbnlp.css';
import '../../css/m/mtby01bes.css';
import '../../css/z/ztqkd1byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oq09cbnlp"/><path class="mtby01bes"/><path class="ztqkd1byf"/></g>`,
		"fallback": "andrsrxn:hand-receiving-box",
	});
}

export default Component;
