import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eilv5mbmy.css';
import '../../css/f/f_b1kumim.css';
import '../../css/r/r1ohr3b0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eilv5mbmy"/><path class="f_b1kumim"/><path class="r1ohr3b0e"/>`,
		"fallback": "energy-icons:cable-landing-48",
	});
}

export default Component;
