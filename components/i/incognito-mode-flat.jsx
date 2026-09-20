import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/moihzt_8o.css';
import '../../css/w/w3qemh-tc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="moihzt_8o"/><path class="w3qemh-tc"/></g>`,
		"fallback": "streamline-color:incognito-mode-flat",
	});
}

export default Component;
