import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e8mxa0b0u.css';
import '../../css/m/mz4_pdb4r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e8mxa0b0u"/><path class="mz4_pdb4r"/></g>`,
		"fallback": "healthicons:baby-0203-alt-outline",
	});
}

export default Component;
