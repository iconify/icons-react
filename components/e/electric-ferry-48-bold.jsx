import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va76gu84o.css';
import '../../css/d/d5_bi6_gk.css';
import '../../css/f/f_17pacdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va76gu84o"/><path class="d5_bi6_gk"/><path class="f_17pacdf"/>`,
		"fallback": "energy-icons:electric-ferry-48-bold",
	});
}

export default Component;
