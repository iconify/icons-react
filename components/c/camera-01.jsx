import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zk6m5lngz.css';
import '../../css/n/ncss8tx5f.css';
import '../../css/c/cb8u71hty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zk6m5lngz"/><path class="ncss8tx5f"/><path class="cb8u71hty"/></g>`,
		"fallback": "hugeicons:camera-01",
	});
}

export default Component;
