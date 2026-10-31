import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kvoqz67-p.css';
import '../../css/w/wx2_uc6pr.css';
import '../../css/d/dwxtqfi9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kvoqz67-p wm-shadow"/><path class="wm-shadow wx2_uc6pr"/><path class="dwxtqfi9d"/></g>`,
		"fallback": "withicons-brutal:chevrons-right",
	});
}

export default Component;
