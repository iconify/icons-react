import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvdnlfa5d.css';
import '../../css/r/r4-rvcapq.css';
import '../../css/m/mw_9bdu9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvdnlfa5d"/><path class="r4-rvcapq"/><path class="mw_9bdu9k"/>`,
		"fallback": "energy-icons:box-48-bold",
	});
}

export default Component;
