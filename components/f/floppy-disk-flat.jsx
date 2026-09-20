import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uth32lcje.css';
import '../../css/e/e3_i8568z.css';
import '../../css/t/toq6lbczo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uth32lcje"/><path class="e3_i8568z"/><path clip-rule="evenodd" class="toq6lbczo"/></g>`,
		"fallback": "streamline-plump-color:floppy-disk-flat",
	});
}

export default Component;
