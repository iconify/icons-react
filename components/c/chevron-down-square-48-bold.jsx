import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu-t6btd.css';
import '../../css/q/ql3mu_b-x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbu-t6btd"/><path class="ql3mu_b-x"/>`,
		"fallback": "energy-icons:chevron-down-square-48-bold",
	});
}

export default Component;
