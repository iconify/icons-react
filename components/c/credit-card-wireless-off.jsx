import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4ih2k-9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4ih2k-9f"/>`,
		"fallback": "mdi:credit-card-wireless-off",
	});
}

export default Component;
