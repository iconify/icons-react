import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg81n9b3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg81n9b3g"/>`,
		"fallback": "game-icons:cloak-dagger",
	});
}

export default Component;
