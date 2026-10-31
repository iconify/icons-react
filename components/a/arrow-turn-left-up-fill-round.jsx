import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk2rrg9ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk2rrg9ce"/>`,
		"fallback": "coolicons:arrow-turn-left-up-fill-round",
	});
}

export default Component;
