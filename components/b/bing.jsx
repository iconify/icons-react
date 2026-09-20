import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2i50-arv.css';
import '../../css/a/adhi_y29i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2i50-arv"/><path class="adhi_y29i"/>`,
		"fallback": "uim:bing",
	});
}

export default Component;
