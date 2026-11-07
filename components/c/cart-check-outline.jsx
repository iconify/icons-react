import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytjvhenfl.css';
import '../../css/d/df6t0qb7f.css';
import '../../css/m/mgt7vwb6i.css';
import '../../css/q/qawukvmtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytjvhenfl"/><path clip-rule="evenodd" class="df6t0qb7f"/><path clip-rule="evenodd" class="mgt7vwb6i"/><path clip-rule="evenodd" class="qawukvmtm"/>`,
		"fallback": "solar:cart-check-outline",
	});
}

export default Component;
