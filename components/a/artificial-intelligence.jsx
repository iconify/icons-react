import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgvzodboz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgvzodboz"/>`,
		"fallback": "game-icons:artificial-intelligence",
	});
}

export default Component;
