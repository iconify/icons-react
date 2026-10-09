import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-8xbcar.css';
import '../../css/s/sw1rf8b4b.css';
import '../../css/b/b3fhqxbyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-8xbcar"/><path class="sw1rf8b4b"/><path class="b3fhqxbyf"/>`,
		"fallback": "energy-icons:circuit-breaker-48",
	});
}

export default Component;
