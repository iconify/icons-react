import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_0hu0bwj.css';
import '../../css/d/dt47j_-uq.css';
import '../../css/j/jr7mllb-s.css';
import '../../css/i/iqpkuk7ec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_0hu0bwj"/><path class="dt47j_-uq"/><path class="jr7mllb-s"/><path class="iqpkuk7ec"/>`,
		"fallback": "energy-icons:bell-plus-48-bold",
	});
}

export default Component;
