import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r30vy4y7i.css';
import '../../css/f/frzyvi6ro.css';
import '../../css/f/fj1_tccay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r30vy4y7i"/><path class="frzyvi6ro"/><path class="fj1_tccay"/>`,
		"fallback": "energy-icons:hydrogen-ship-48",
	});
}

export default Component;
