import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uspm4fblj.css';
import '../../css/b/bq1dbsvyq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uspm4fblj"/><path class="bq1dbsvyq"/>`,
		"fallback": "energy-icons:arrow-down-left-48",
	});
}

export default Component;
