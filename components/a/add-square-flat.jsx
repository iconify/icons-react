import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n22qpv41f.css';
import '../../css/e/ezvqu1ltm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n22qpv41f"/><path clip-rule="evenodd" class="ezvqu1ltm"/></g>`,
		"fallback": "streamline-color:add-square-flat",
	});
}

export default Component;
