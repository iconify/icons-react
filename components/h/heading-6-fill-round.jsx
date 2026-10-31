import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikn_s50ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikn_s50ly"/>`,
		"fallback": "coolicons:heading-6-fill-round",
	});
}

export default Component;
