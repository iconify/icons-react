import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pb3h7wrlx.css';
import '../../css/c/cf16i906o.css';
import '../../css/l/lobx3hszy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pb3h7wrlx"/><path class="cf16i906o"/><path class="lobx3hszy"/></g>`,
		"fallback": "streamline-color:controller-wireless",
	});
}

export default Component;
