import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol3ka2byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol3ka2byx"/>`,
		"fallback": "coolicons:arrow-u-turn-down-left-duotone-round",
	});
}

export default Component;
