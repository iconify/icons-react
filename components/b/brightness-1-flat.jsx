import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqlupvyov.css';
import '../../css/n/ngzumymow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lqlupvyov"/><path class="ngzumymow"/></g>`,
		"fallback": "streamline-sharp-color:brightness-1-flat",
	});
}

export default Component;
