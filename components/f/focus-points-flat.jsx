import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c31-wmrym.css';
import '../../css/t/tlr9evbfo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c31-wmrym"/><path class="tlr9evbfo"/></g>`,
		"fallback": "streamline-plump-color:focus-points-flat",
	});
}

export default Component;
