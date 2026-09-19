import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v7ejf2a8s.css';
import '../../css/g/gdj9jv5-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v7ejf2a8s"/><path class="gdj9jv5-p"/></g>`,
		"fallback": "healthicons:ambulatory-clinic2x-outline",
	});
}

export default Component;
