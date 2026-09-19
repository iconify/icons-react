import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1420tb-x.css';
import '../../css/o/o2k0j_bqg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="d1420tb-x"/><path class="o2k0j_bqg"/>`,
		"fallback": "garden:credit-card-stroke-12",
	});
}

export default Component;
