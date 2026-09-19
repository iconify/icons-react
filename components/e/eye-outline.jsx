import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t7untp06e.css';
import '../../css/p/pppd2bj1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t7untp06e"/><path class="pppd2bj1f"/></g>`,
		"fallback": "healthicons:eye-outline",
	});
}

export default Component;
