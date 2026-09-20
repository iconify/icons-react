import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k44r3ubuy.css';
import '../../css/e/elbw__bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k44r3ubuy"/><path clip-rule="evenodd" class="elbw__bus"/></g>`,
		"fallback": "streamline-sharp-color:flash-timer-flat",
	});
}

export default Component;
