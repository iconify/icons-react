import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3861dbmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3861dbmr"/>`,
		"fallback": "game-icons:cootie-catcher",
	});
}

export default Component;
