import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t6a254vls.css';
import '../../css/w/waaq1qb5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t6a254vls"/><path class="waaq1qb5w"/></g>`,
		"fallback": "streamline-plump-color:align-object-left-flat",
	});
}

export default Component;
