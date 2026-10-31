import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-hp-mnyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-hp-mnyd"/>`,
		"fallback": "coolicons:arrow-left-large-duotone-round",
	});
}

export default Component;
