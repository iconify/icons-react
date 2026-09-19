import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/otvne8t3z.css';
import '../../css/b/b9cfh-tkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="otvne8t3z"/><path class="b9cfh-tkm"/></g>`,
		"fallback": "healthicons:icd-102x-outline",
	});
}

export default Component;
