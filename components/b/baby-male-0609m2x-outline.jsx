import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mkkdwsngs.css';
import '../../css/n/nf3pgpbla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mkkdwsngs"/><path class="nf3pgpbla"/></g>`,
		"fallback": "healthicons:baby-male-0609m2x-outline",
	});
}

export default Component;
