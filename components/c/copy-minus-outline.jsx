import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckns9ub6x.css';
import '../../css/e/egvbavgae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckns9ub6x"/><path clip-rule="evenodd" class="egvbavgae"/>`,
		"fallback": "solar:copy-minus-outline",
	});
}

export default Component;
