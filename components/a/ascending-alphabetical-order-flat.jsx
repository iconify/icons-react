import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2fymbcsl.css';
import '../../css/e/ed_5ubccl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2fymbcsl"/><path class="ed_5ubccl"/></g>`,
		"fallback": "streamline-plump-color:ascending-alphabetical-order-flat",
	});
}

export default Component;
