import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mcems0k.css';
import '../../css/z/zgr1s6bag.css';
import '../../css/q/q9re1fbbm.css';
import '../../css/p/p40y-2b1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mcems0k"/><path class="zgr1s6bag"/><path class="q9re1fbbm"/><path class="p40y-2b1m"/>`,
		"fallback": "energy-icons:house-snowflake-20-bold",
	});
}

export default Component;
