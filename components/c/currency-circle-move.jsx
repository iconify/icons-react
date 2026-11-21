import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/a/ajsxm7k7d.css';
import '../../css/k/k2u8vwb-t.css';
import '../../css/s/skdldbb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="ajsxm7k7d"/><path class="k2u8vwb-t"/><path class="skdldbb9o"/></g>`,
		"fallback": "andrsrxn:currency-circle-move",
	});
}

export default Component;
