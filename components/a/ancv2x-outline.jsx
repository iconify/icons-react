import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/csmpxqbri.css';
import '../../css/a/az2031bmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="csmpxqbri"/><path class="az2031bmt"/></g>`,
		"fallback": "healthicons:ancv2x-outline",
	});
}

export default Component;
