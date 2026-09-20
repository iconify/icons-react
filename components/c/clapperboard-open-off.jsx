import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niqq-bc2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niqq-bc2j"/>`,
		"fallback": "mdi:clapperboard-open-off",
	});
}

export default Component;
