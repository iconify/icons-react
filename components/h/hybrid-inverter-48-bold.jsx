import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he0-9w7up.css';
import '../../css/g/gsa3x5b0c.css';
import '../../css/p/p2d0_rjcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he0-9w7up"/><path class="gsa3x5b0c"/><path class="p2d0_rjcy"/>`,
		"fallback": "energy-icons:hybrid-inverter-48-bold",
	});
}

export default Component;
