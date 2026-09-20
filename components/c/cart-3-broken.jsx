import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k-6h5bc3a.css';
import '../../css/a/a5lu9cbol.css';
import '../../css/m/mr-7tobra.css';
import '../../css/v/vxf2a878x.css';
import '../../css/f/f0u2ylb5l.css';
import '../../css/c/cqj5tpb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k-6h5bc3a"/><path class="a5lu9cbol"/><path class="mr-7tobra"/><path class="vxf2a878x"/><path class="f0u2ylb5l"/><path class="cqj5tpb-u"/></g>`,
		"fallback": "solar:cart-3-broken",
	});
}

export default Component;
