import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/o/om_axp74m.css';
import '../../css/r/rh4rc7bcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="om_axp74m"/><path class="rh4rc7bcm"/>`,
		"fallback": "energy-icons:file-plus-48",
	});
}

export default Component;
