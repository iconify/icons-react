import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfb5v-moa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfb5v-moa"/>`,
		"fallback": "game-icons:drama-masks",
	});
}

export default Component;
