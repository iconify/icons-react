import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_fufy6_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_fufy6_a"/>`,
		"fallback": "hugeicons:ai-chemistry-01",
	});
}

export default Component;
