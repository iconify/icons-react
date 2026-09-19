import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lpx4pgeci.css';
import '../../css/u/u36wmrn8t.css';
import '../../css/k/kf_dizzer.css';
import '../../css/n/n2rflacij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lpx4pgeci"/><path class="u36wmrn8t"/><path class="kf_dizzer"/><path class="n2rflacij"/></g>`,
		"fallback": "hugeicons:backpack-02",
	});
}

export default Component;
