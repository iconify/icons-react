import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhh5q_bxg.css';
import '../../css/t/tetsfk0bz.css';
import '../../css/m/mk-w6obqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhh5q_bxg"/><path class="tetsfk0bz"/><path class="mk-w6obqp"/>`,
		"fallback": "energy-icons:cnc-machine-48",
	});
}

export default Component;
