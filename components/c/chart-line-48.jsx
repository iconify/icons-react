import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/w/wqvq98bbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="wqvq98bbm"/>`,
		"fallback": "energy-icons:chart-line-48",
	});
}

export default Component;
