import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnym_lbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnym_lbzm"/>`,
		"fallback": "tabler:credit-card-off",
	});
}

export default Component;
