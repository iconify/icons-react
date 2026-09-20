import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smxycjv8r.css';
import '../../css/d/d40k5f_qe.css';
import '../../css/o/o3owdebtz.css';
import '../../css/m/m6tjarb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="smxycjv8r"/><path class="d40k5f_qe"/><path class="o3owdebtz"/><path class="m6tjarb6e"/></g>`,
		"fallback": "solar:chair-2-broken",
	});
}

export default Component;
