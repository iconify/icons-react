import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpeu_j1mo.css';
import '../../css/c/cmhnqibcc.css';
import '../../css/w/wqsnrac2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpeu_j1mo"/><path class="cmhnqibcc"/><path class="wqsnrac2k"/>`,
		"fallback": "energy-icons:chart-donut-48",
	});
}

export default Component;
