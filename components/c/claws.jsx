import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsf5x-bue.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsf5x-bue"/>`,
		"fallback": "game-icons:claws",
	});
}

export default Component;
