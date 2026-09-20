import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c75-_gvco.css';
import '../../css/s/six0m6dxp.css';
import '../../css/k/kspo6_bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c75-_gvco"/><path class="six0m6dxp"/><circle class="kspo6_bze"/></g>`,
		"fallback": "solar:history-2-line-duotone",
	});
}

export default Component;
