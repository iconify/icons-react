import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzh-h4k4i.css';
import '../../css/o/op16wnoyd.css';
import '../../css/k/k81m4nfaf.css';
import '../../css/q/qiusj_lre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzh-h4k4i"/><path class="op16wnoyd"/><path class="k81m4nfaf"/><path class="qiusj_lre"/>`,
		"fallback": "energy-icons:geothermal-well-48",
	});
}

export default Component;
