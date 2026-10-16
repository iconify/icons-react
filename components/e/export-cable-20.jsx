import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k83ntuifl.css';
import '../../css/m/maz9ht0sw.css';
import '../../css/y/yxfra0bqr.css';
import '../../css/w/we3m-pbfh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k83ntuifl"/><path class="maz9ht0sw"/><path class="yxfra0bqr"/><path class="we3m-pbfh"/>`,
		"fallback": "energy-icons:export-cable-20",
	});
}

export default Component;
