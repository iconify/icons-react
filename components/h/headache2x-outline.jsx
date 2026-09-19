import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/emec0-bdc.css';
import '../../css/r/r8jaoo3zl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="emec0-bdc"/><path class="r8jaoo3zl"/></g>`,
		"fallback": "healthicons:headache2x-outline",
	});
}

export default Component;
