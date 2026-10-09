import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxmtgk7_c.css';
import '../../css/e/el25l0wwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxmtgk7_c"/><path class="el25l0wwk"/>`,
		"fallback": "energy-icons:heat-battery-48-bold",
	});
}

export default Component;
