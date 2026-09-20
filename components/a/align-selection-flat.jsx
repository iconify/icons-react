import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgcn27bcz.css';
import '../../css/f/fxv2k7bty.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgcn27bcz"/><path clip-rule="evenodd" class="fxv2k7bty"/></g>`,
		"fallback": "streamline-plump-color:align-selection-flat",
	});
}

export default Component;
