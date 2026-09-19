import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1xq18ehc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1xq18ehc"/>`,
		"fallback": "game-icons:computer-fan",
	});
}

export default Component;
