import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb0rmwb_o.css';
import '../../css/n/n_tg6m2do.css';
import '../../css/f/f_6f76wwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb0rmwb_o"/><path class="n_tg6m2do"/><path class="f_6f76wwl"/>`,
		"fallback": "energy-icons:cash-register-48-bold",
	});
}

export default Component;
