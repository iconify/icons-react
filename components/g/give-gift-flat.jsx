import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zykx9oknz.css';
import '../../css/a/ai1qf_bim.css';
import '../../css/o/ohe40ccui.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zykx9oknz"/><path clip-rule="evenodd" class="ai1qf_bim"/><path clip-rule="evenodd" class="ohe40ccui"/></g>`,
		"fallback": "streamline-color:give-gift-flat",
	});
}

export default Component;
