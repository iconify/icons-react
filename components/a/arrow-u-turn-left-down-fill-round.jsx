import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-hffqb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-hffqb-x"/>`,
		"fallback": "coolicons:arrow-u-turn-left-down-fill-round",
	});
}

export default Component;
