import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m40g0ky5w.css';
import '../../css/f/fvchyqeyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m40g0ky5w"/><path class="fvchyqeyg"/></g>`,
		"fallback": "healthicons:calendar",
	});
}

export default Component;
