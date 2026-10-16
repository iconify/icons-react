import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnwntobhb.css';
import '../../css/y/yd8awt77v.css';
import '../../css/d/ds8d00hgb.css';
import '../../css/d/dmbbndb5p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnwntobhb"/><path class="yd8awt77v"/><path class="ds8d00hgb"/><path class="dmbbndb5p"/>`,
		"fallback": "energy-icons:electric-heater-20-bold",
	});
}

export default Component;
