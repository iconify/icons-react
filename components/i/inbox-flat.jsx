import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzv8pobyn.css';
import '../../css/k/k741nrb7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzv8pobyn"/><path clip-rule="evenodd" class="k741nrb7w"/></g>`,
		"fallback": "streamline-flex-color:inbox-flat",
	});
}

export default Component;
