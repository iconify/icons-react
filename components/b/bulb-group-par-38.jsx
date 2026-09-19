import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1e3qk_2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1e3qk_2u"/>`,
		"fallback": "cbi:bulb-group-par-38",
	});
}

export default Component;
