import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bxid5vlow.css';
import '../../css/b/bpk759byf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bxid5vlow"/><path class="bpk759byf"/></g>`,
		"fallback": "healthicons:anus-outline",
	});
}

export default Component;
