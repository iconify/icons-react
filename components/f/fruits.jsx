import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qs-agmjdy.css';
import '../../css/c/cs3t1qbvt.css';
import '../../css/m/mmjpv4bpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qs-agmjdy"/><path class="cs3t1qbvt"/><path class="mmjpv4bpa"/></g>`,
		"fallback": "healthicons:fruits",
	});
}

export default Component;
