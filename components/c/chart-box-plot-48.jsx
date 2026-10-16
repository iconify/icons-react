import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/s/scbs1klxo.css';
import '../../css/u/u7h9tbb8s.css';
import '../../css/h/h1lyfgblt.css';
import '../../css/y/y5q7z4hfb.css';
import '../../css/q/qaw_-txxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="scbs1klxo"/><path class="u7h9tbb8s"/><path class="h1lyfgblt"/><path class="y5q7z4hfb"/><path class="qaw_-txxt"/>`,
		"fallback": "energy-icons:chart-box-plot-48",
	});
}

export default Component;
