import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';
import '../../css/h/hgs51yb0o.css';
import '../../css/m/mb35h0b4e.css';
import '../../css/k/kq6uq6h8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="t4qaumccy"/><path class="hgs51yb0o"/><path class="mb35h0b4e"/><path class="kq6uq6h8w"/></g>`,
		"fallback": "solar:file-chart-2-broken",
	});
}

export default Component;
