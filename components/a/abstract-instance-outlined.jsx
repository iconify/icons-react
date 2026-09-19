import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_wt5ub2x.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_wt5ub2x"/><circle class="n1xy6nh9u"/>`,
		"fallback": "eos-icons:abstract-instance-outlined",
	});
}

export default Component;
