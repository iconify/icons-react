import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0__5rb2x.css';
import '../../css/o/ors50g_vw.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0__5rb2x"/><path class="ors50g_vw"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:bell-check-48-bold",
	});
}

export default Component;
