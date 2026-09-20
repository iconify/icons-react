import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/s/s2tis1bpw.css';
import '../../css/l/lc5mm78aw.css';
import '../../css/j/jt0mlr5bg.css';
import '../../css/i/ix2yyfqqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="s2tis1bpw"/><path class="lc5mm78aw"/><path class="jt0mlr5bg"/><path class="ix2yyfqqg"/></g>`,
		"fallback": "solar:closet-2-linear",
	});
}

export default Component;
