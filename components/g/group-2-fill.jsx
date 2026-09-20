import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl_qbjujm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl_qbjujm"/>`,
		"fallback": "ri:group-2-fill",
	});
}

export default Component;
