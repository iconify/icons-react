import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q59m2-7jc.css';
import '../../css/o/o9k83k9ug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q59m2-7jc"/><path class="o9k83k9ug"/></g>`,
		"fallback": "healthicons:fhir-logo",
	});
}

export default Component;
