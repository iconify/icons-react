import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m-wk_dbel.css';
import '../../css/k/k3fje0_dj.css';
import '../../css/m/mnn2gnb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m-wk_dbel wm-shadow"/><path class="k3fje0_dj wm-shadow"/><path class="mnn2gnb7j"/></g>`,
		"fallback": "withicons-brutal:check-check",
	});
}

export default Component;
