import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yff31rbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yff31rbos"/>`,
		"fallback": "coolicons:arrow-u-turn-right-up-round",
	});
}

export default Component;
