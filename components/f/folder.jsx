import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgaqpcbiz.css';
import '../../css/l/lcaoj-wbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgaqpcbiz"/><path class="lcaoj-wbf"/>`,
		"fallback": "fxemoji:folder",
	});
}

export default Component;
