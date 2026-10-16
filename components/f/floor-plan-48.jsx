import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rivd4q8kk.css';
import '../../css/l/ltjv97o_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rivd4q8kk"/><path class="ltjv97o_e"/>`,
		"fallback": "energy-icons:floor-plan-48",
	});
}

export default Component;
