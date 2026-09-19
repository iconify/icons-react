import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lauyvlb9t.css';
import '../../css/v/vz0lijbto.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lauyvlb9t"/><path class="vz0lijbto"/></g>`,
		"fallback": "healthicons:defibrillator2x-outline",
	});
}

export default Component;
