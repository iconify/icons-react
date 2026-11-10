import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-oobxf0t.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/d/dmeshi2wj.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n-oobxf0t"/><path class="tr8xe4bes"/><path class="dmeshi2wj"/><path class="zapwtgb_o"/></g>`,
		"fallback": "andrsrxn:image",
	});
}

export default Component;
