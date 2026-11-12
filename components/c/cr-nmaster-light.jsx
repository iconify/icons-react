import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poddgvb-j.css';
import '../../css/u/uqp1_ibtg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poddgvb-j"/><path class="uqp1_ibtg"/>`,
		"fallback": "selfhst:cr-nmaster-light",
	});
}

export default Component;
