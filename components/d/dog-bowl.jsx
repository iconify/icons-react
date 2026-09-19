import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocs8y_blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocs8y_blu"/>`,
		"fallback": "game-icons:dog-bowl",
	});
}

export default Component;
