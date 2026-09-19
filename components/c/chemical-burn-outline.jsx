import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qr138rekt.css';
import '../../css/k/km1-g219g.css';
import '../../css/l/lcyljpboc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qr138rekt"/><path class="km1-g219g"/><path class="lcyljpboc"/></g>`,
		"fallback": "healthicons:chemical-burn-outline",
	});
}

export default Component;
