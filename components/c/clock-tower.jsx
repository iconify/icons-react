import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks7t_sbrd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks7t_sbrd"/>`,
		"fallback": "game-icons:clock-tower",
	});
}

export default Component;
