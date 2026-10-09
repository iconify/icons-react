import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjt_z5brr.css';
import '../../css/g/gkrmg0bdd.css';
import '../../css/w/w8f5y0ctf.css';
import '../../css/e/e27-1tvtb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjt_z5brr"/><path class="gkrmg0bdd"/><path class="w8f5y0ctf"/><path class="e27-1tvtb"/>`,
		"fallback": "energy-icons:hydro-turbine-48-bold",
	});
}

export default Component;
