import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rb8zz63bl.css';
import '../../css/m/mkmntjeof.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rb8zz63bl"/><path clip-rule="evenodd" class="mkmntjeof"/></g>`,
		"fallback": "streamline-color:clipboard-check-flat",
	});
}

export default Component;
