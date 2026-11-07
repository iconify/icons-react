import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shgejf8-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shgejf8-j"/>`,
		"fallback": "sidekickicons:chart-line-up",
	});
}

export default Component;
