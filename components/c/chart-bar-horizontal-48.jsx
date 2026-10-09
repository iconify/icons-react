import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv2p86eoi.css';
import '../../css/i/ietxivbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv2p86eoi"/><path class="ietxivbey"/>`,
		"fallback": "energy-icons:chart-bar-horizontal-48",
	});
}

export default Component;
