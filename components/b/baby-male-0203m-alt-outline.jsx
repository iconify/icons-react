import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iwkfzcbze.css';
import '../../css/g/g_brudjss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iwkfzcbze"/><path class="g_brudjss"/></g>`,
		"fallback": "healthicons:baby-male-0203m-alt-outline",
	});
}

export default Component;
