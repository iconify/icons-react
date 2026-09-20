import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yokjecbgj.css';
import '../../css/c/c2e_vtbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="yokjecbgj"/><path clip-rule="evenodd" class="c2e_vtbey"/></g>`,
		"fallback": "streamline-plump:arrow-right-circle-1",
	});
}

export default Component;
