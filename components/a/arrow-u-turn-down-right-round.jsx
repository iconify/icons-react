import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb3n-4b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb3n-4b3j"/>`,
		"fallback": "coolicons:arrow-u-turn-down-right-round",
	});
}

export default Component;
