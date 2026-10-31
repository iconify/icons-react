import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwc177mig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwc177mig"/>`,
		"fallback": "sidekickicons:dots-3x2",
	});
}

export default Component;
