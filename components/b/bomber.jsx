import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3az1bq5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3az1bq5g"/>`,
		"fallback": "game-icons:bomber",
	});
}

export default Component;
