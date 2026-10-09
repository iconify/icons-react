import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojno-rj8g.css';
import '../../css/i/iyti-7bea.css';
import '../../css/w/wi_h01enb.css';
import '../../css/f/fonho850d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojno-rj8g"/><path class="iyti-7bea"/><path class="wi_h01enb"/><path class="fonho850d"/>`,
		"fallback": "energy-icons:hydrogen-tank-48",
	});
}

export default Component;
