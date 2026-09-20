import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-v6ilq_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-v6ilq_u"/>`,
		"fallback": "mdi:faucet-off",
	});
}

export default Component;
