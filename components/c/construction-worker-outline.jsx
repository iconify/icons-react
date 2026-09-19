import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d7k23v18a.css';
import '../../css/j/jyjtrdb8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d7k23v18a"/><path class="jyjtrdb8h"/></g>`,
		"fallback": "healthicons:construction-worker-outline",
	});
}

export default Component;
