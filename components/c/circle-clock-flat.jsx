import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e8psh3biy.css';
import '../../css/n/n-t92abvs.css';
import '../../css/c/c-24taceb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e8psh3biy"/><path class="n-t92abvs"/><path class="c-24taceb"/></g>`,
		"fallback": "streamline-plump-color:circle-clock-flat",
	});
}

export default Component;
