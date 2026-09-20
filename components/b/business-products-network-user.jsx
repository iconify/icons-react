import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkdtjjbjw.css';
import '../../css/d/dt3455rte.css';
import '../../css/w/wd_zv6bvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkdtjjbjw"/><path class="dt3455rte"/><path class="wd_zv6bvb"/>`,
		"fallback": "streamline-pixel:business-products-network-user",
	});
}

export default Component;
