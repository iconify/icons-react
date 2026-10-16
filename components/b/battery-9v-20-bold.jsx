import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2nplbcdb.css';
import '../../css/z/zswjyimei.css';
import '../../css/p/pscvu07cr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2nplbcdb"/><path class="zswjyimei"/><path class="pscvu07cr"/>`,
		"fallback": "energy-icons:battery-9v-20-bold",
	});
}

export default Component;
