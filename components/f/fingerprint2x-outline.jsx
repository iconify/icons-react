import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k49x4hkel.css';
import '../../css/u/u3hrifq2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k49x4hkel"/><path class="u3hrifq2u"/></g>`,
		"fallback": "healthicons:fingerprint2x-outline",
	});
}

export default Component;
