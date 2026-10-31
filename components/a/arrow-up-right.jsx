import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dk7j8dv6k.css';
import '../../css/h/hisjxxs8m.css';
import '../../css/m/m3dpa_sju.css';
import '../../css/m/mdmesrboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dk7j8dv6k wm-shadow"/><path class="hisjxxs8m wm-shadow"/><path class="m3dpa_sju"/><path class="mdmesrboj"/></g>`,
		"fallback": "withicons-brutal:arrow-up-right",
	});
}

export default Component;
