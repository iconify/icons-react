import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpmie_b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpmie_b1t"/>`,
		"fallback": "mdi:chevron-up-box-outline",
	});
}

export default Component;
