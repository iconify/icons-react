import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyyqc0_4u.css';
import '../../css/l/lt5eqobgu.css';
import '../../css/b/bm1mepbat.css';
import '../../css/t/tm8mwlb-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyyqc0_4u"/><path class="lt5eqobgu"/><path class="bm1mepbat"/><path class="tm8mwlb-l"/>`,
		"fallback": "energy-icons:dining-table-48-bold",
	});
}

export default Component;
