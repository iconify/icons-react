import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlh2grc4z.css';
import '../../css/s/s_xhc_bbj.css';
import '../../css/i/ige_o2b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zlh2grc4z"/><path class="s_xhc_bbj"/><path class="ige_o2b4i"/></g>`,
		"fallback": "andrsrxn:clock-pm",
	});
}

export default Component;
