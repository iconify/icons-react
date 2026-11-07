import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cf-4imbpi.css';
import '../../css/r/rxf5pixtu.css';
import '../../css/e/e6k5rfbvz.css';
import '../../css/n/nc6t2vbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cf-4imbpi"/><path class="rxf5pixtu"/><path class="e6k5rfbvz"/><path class="nc6t2vbek"/></g>`,
		"fallback": "solar:cloud-waterdrops-linear",
	});
}

export default Component;
