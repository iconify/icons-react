import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryk05ccjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryk05ccjr"/>`,
		"fallback": "game-icons:breaking-chain",
	});
}

export default Component;
