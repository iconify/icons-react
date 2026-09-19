import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qhnyn9b7j.css';
import '../../css/k/kfo6jobhl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qhnyn9b7j"/><path class="kfo6jobhl"/></g>`,
		"fallback": "healthicons:allergies-outline",
	});
}

export default Component;
