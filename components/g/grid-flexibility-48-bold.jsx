import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2a-4big.css';
import '../../css/b/bj4r87yrk.css';
import '../../css/s/sha9b7rmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy2a-4big"/><path class="bj4r87yrk"/><path class="sha9b7rmw"/>`,
		"fallback": "energy-icons:grid-flexibility-48-bold",
	});
}

export default Component;
