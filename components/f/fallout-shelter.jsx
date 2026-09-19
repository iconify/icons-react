import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzy_64bdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzy_64bdq"/>`,
		"fallback": "game-icons:fallout-shelter",
	});
}

export default Component;
