import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjdv2dp9t.css';
import '../../css/s/sla-3ib_b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjdv2dp9t"/><path class="sla-3ib_b"/>`,
		"fallback": "energy-icons:bear-20-bold",
	});
}

export default Component;
