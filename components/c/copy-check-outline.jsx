import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjjac2bhg.css';
import '../../css/e/egvbavgae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjjac2bhg"/><path clip-rule="evenodd" class="egvbavgae"/>`,
		"fallback": "solar:copy-check-outline",
	});
}

export default Component;
