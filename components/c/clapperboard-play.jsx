import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuqw7iz_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuqw7iz_j"/>`,
		"fallback": "noviair-light:clapperboard-play",
	});
}

export default Component;
