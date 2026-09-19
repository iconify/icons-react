import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/otvne8t3z.css';
import '../../css/o/ox00i7m3s.css';
import '../../css/k/kbuosh9lc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="otvne8t3z"/><path class="ox00i7m3s"/><path class="kbuosh9lc"/></g>`,
		"fallback": "healthicons:hepatology2x-outline",
	});
}

export default Component;
