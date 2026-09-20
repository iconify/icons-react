import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-h3xgbno.css';
import '../../css/k/k-2dhebbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-h3xgbno"/><path class="k-2dhebbn"/>`,
		"fallback": "streamline-ultimate:gauge-dashboard-bold",
	});
}

export default Component;
