import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjtl1l1wp.css';
import '../../css/b/bvlxd1b5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjtl1l1wp"/><path class="bvlxd1b5t"/>`,
		"fallback": "carbon:ibm-cloud-citrix-daas",
	});
}

export default Component;
