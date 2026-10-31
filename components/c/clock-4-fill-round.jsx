import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyjunpvwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyjunpvwq"/>`,
		"fallback": "coolicons:clock-4-fill-round",
	});
}

export default Component;
