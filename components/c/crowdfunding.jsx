import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k45hr2bcn.css';
import '../../css/s/swsab_86e.css';
import '../../css/o/o1u583b9p.css';
import '../../css/q/qtxsezbbm.css';
import '../../css/w/wp5xjpmnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="k45hr2bcn"/><circle class="swsab_86e"/><circle class="o1u583b9p"/><circle class="qtxsezbbm"/><path class="wp5xjpmnu"/></g>`,
		"fallback": "hugeicons:crowdfunding",
	});
}

export default Component;
