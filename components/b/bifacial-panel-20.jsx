import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd0f3xbtg.css';
import '../../css/d/d1x_elz9b.css';
import '../../css/h/hlybjobrv.css';
import '../../css/p/pycxazbfr.css';
import '../../css/r/r_-9fdcie.css';
import '../../css/s/she9p-80n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd0f3xbtg"/><path class="d1x_elz9b"/><path class="hlybjobrv"/><path class="pycxazbfr"/><path class="r_-9fdcie"/><path class="she9p-80n"/>`,
		"fallback": "energy-icons:bifacial-panel-20",
	});
}

export default Component;
