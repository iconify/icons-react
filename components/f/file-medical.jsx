import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijz16pbuz.css';
import '../../css/e/ejh1sz45b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ijz16pbuz"/><path clip-rule="evenodd" class="ejh1sz45b"/></g>`,
		"fallback": "griddy-icons:file-medical",
	});
}

export default Component;
