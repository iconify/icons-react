import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz5c19bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz5c19bcm"/>`,
		"fallback": "tabler:arrows-transfer-up",
	});
}

export default Component;
