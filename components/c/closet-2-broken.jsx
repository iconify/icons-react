import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/j/ju2bde_7s.css';
import '../../css/l/lc5mm78aw.css';
import '../../css/j/jt0mlr5bg.css';
import '../../css/w/w9lc49y0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="ju2bde_7s"/><path class="lc5mm78aw"/><path class="jt0mlr5bg"/><path class="w9lc49y0d"/></g>`,
		"fallback": "solar:closet-2-broken",
	});
}

export default Component;
