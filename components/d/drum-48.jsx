import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbk4vsmtj.css';
import '../../css/w/ww_xydb2s.css';
import '../../css/e/ejdsdgbzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbk4vsmtj"/><path class="ww_xydb2s"/><path class="ejdsdgbzd"/>`,
		"fallback": "energy-icons:drum-48",
	});
}

export default Component;
