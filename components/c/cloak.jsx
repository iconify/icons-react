import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0ahp_b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0ahp_b9w"/>`,
		"fallback": "game-icons:cloak",
	});
}

export default Component;
