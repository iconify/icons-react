import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrsls2auw.css';
import '../../css/f/fapgrnb1n.css';
import '../../css/l/l9gndm50e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrsls2auw"/><path class="fapgrnb1n"/><path class="l9gndm50e"/>`,
		"fallback": "energy-icons:bird-safe-48-bold",
	});
}

export default Component;
