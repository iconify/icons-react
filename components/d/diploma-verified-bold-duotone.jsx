import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzrmuh6oi.css';
import '../../css/i/ite9z1bgd.css';
import '../../css/z/z4sp6ccuh.css';
import '../../css/w/w4vpn2hmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tzrmuh6oi"/><path class="ite9z1bgd"/><path class="z4sp6ccuh"/><path class="w4vpn2hmp"/></g>`,
		"fallback": "solar:diploma-verified-bold-duotone",
	});
}

export default Component;
