import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cby4qwqpn.css';
import '../../css/p/pm_aogoas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cby4qwqpn"/><path class="pm_aogoas"/></g>`,
		"fallback": "lets-icons:broken-heart-duotone",
	});
}

export default Component;
