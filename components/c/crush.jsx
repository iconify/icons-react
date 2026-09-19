import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2mp06b-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2mp06b-w"/>`,
		"fallback": "game-icons:crush",
	});
}

export default Component;
