import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5l0qfkfv.css';
import '../../css/b/bqre7cb6l.css';
import '../../css/e/e-mnjgbvj.css';
import '../../css/z/zkkwlgbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5l0qfkfv"/><path class="bqre7cb6l"/><path class="e-mnjgbvj"/><path class="zkkwlgbcl"/></g>`,
		"fallback": "andrsrxn:car-police-front",
	});
}

export default Component;
