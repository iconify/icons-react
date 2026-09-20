import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ony30ebyj.css';
import '../../css/d/d8n813bou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ony30ebyj"/><path class="d8n813bou"/></g>`,
		"fallback": "streamline-plump-color:delete-keyboard-flat",
	});
}

export default Component;
