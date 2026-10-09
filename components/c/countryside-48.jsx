import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_c1rlbdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_c1rlbdg"/>`,
		"fallback": "energy-icons:countryside-48",
	});
}

export default Component;
