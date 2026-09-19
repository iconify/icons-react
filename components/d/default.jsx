import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nhxuj-rwq.css';
import '../../css/f/fd-dg7bxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nhxuj-rwq"/><path class="fd-dg7bxb"/></g>`,
		"fallback": "healthicons:default",
	});
}

export default Component;
