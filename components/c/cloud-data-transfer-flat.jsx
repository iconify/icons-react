import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0sp-29ds.css';
import '../../css/y/y7qgy0wzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0sp-29ds"/><path clip-rule="evenodd" class="y7qgy0wzo"/></g>`,
		"fallback": "streamline-plump-color:cloud-data-transfer-flat",
	});
}

export default Component;
