import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf1ji9q9l.css';
import '../../css/u/uhr4-1blb.css';
import '../../css/p/pwxyecb7m.css';
import '../../css/k/k06yp_3mz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf1ji9q9l"/><path class="uhr4-1blb"/><path class="pwxyecb7m"/><path class="k06yp_3mz"/>`,
		"fallback": "energy-icons:energy-dashboard-20-bold",
	});
}

export default Component;
