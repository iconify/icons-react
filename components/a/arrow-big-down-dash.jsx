import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbgb1xbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbgb1xbtc"/>`,
		"fallback": "lucide:arrow-big-down-dash",
	});
}

export default Component;
