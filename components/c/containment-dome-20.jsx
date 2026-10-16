import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdtcojbje.css';
import '../../css/p/pycxazbfr.css';
import '../../css/e/eepo9qbdx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdtcojbje"/><path class="pycxazbfr"/><path class="eepo9qbdx"/>`,
		"fallback": "energy-icons:containment-dome-20",
	});
}

export default Component;
