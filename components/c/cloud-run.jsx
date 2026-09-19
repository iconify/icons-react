import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uhufdz96y.css';
import '../../css/c/c4q472btv.css';
import '../../css/n/nvqtu2bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uhufdz96y"/><path class="c4q472btv"/><path class="nvqtu2bxi"/></g>`,
		"fallback": "gcp:cloud-run",
	});
}

export default Component;
