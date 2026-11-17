import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jhsdkcb6x.css';
import '../../css/g/g-41ddbub.css';
import '../../css/x/x8qaw_9xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="jhsdkcb6x"/><path class="g-41ddbub"/><path class="x8qaw_9xg"/></g>`,
		"fallback": "matita:app-window",
	});
}

export default Component;
