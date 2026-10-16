import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijs8fxbia.css';
import '../../css/r/ro9_j1_cs.css';
import '../../css/e/eilf2ebne.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijs8fxbia"/><path class="ro9_j1_cs"/><path class="eilf2ebne"/>`,
		"fallback": "energy-icons:charging-canopy-20",
	});
}

export default Component;
