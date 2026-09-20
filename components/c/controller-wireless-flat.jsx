import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swz84onne.css';
import '../../css/q/q5208ybmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swz84onne"/><path clip-rule="evenodd" class="q5208ybmq"/></g>`,
		"fallback": "streamline-sharp-color:controller-wireless-flat",
	});
}

export default Component;
