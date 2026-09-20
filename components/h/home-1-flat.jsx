import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a5iiojb1e.css';
import '../../css/e/e962ekxgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a5iiojb1e"/><path class="e962ekxgx"/></g>`,
		"fallback": "streamline-plump-color:home-1-flat",
	});
}

export default Component;
