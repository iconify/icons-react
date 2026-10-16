import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwg1c_b8g.css';
import '../../css/v/vy6oo5ohm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwg1c_b8g"/><path class="vy6oo5ohm"/>`,
		"fallback": "energy-icons:desertification-48",
	});
}

export default Component;
