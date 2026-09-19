import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocwji-sks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocwji-sks"/>`,
		"fallback": "game-icons:attack-gauge",
	});
}

export default Component;
