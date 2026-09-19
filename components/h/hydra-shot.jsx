import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni33p6btq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni33p6btq"/>`,
		"fallback": "game-icons:hydra-shot",
	});
}

export default Component;
