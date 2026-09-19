import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd_g2tb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd_g2tb1g"/>`,
		"fallback": "boxicons:dribbling-filled",
	});
}

export default Component;
