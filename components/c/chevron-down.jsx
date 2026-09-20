import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk-yam33n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk-yam33n"/>`,
		"fallback": "mage:chevron-down",
	});
}

export default Component;
