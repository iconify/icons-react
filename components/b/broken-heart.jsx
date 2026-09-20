import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w21zh9bgn.css';
import '../../css/m/mz3iprbbx.css';
import '../../css/a/aypdxigqi.css';
import '../../css/c/cm4lp6e5o.css';
import '../../css/s/swjmkkbck.css';
import '../../css/h/hcn__41dd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w21zh9bgn"/><path class="mz3iprbbx"/><path class="aypdxigqi"/><path class="cm4lp6e5o"/><path class="swjmkkbck"/><path class="hcn__41dd"/>`,
		"fallback": "streamline-emojis:broken-heart",
	});
}

export default Component;
