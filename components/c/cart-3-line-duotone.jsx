import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p8gxcvbkv.css';
import '../../css/y/yxub042gf.css';
import '../../css/k/k-6h5bc3a.css';
import '../../css/y/yqmotfmyy.css';
import '../../css/b/b1nxqifcp.css';
import '../../css/z/zy4x83b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p8gxcvbkv"/><path class="yxub042gf"/><path class="k-6h5bc3a"/><path class="yqmotfmyy"/><path class="b1nxqifcp"/><path class="zy4x83b9r"/></g>`,
		"fallback": "solar:cart-3-line-duotone",
	});
}

export default Component;
