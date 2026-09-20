import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k1tjfvb9o.css';
import '../../css/k/km7l-rbnx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="k1tjfvb9o"/><path class="km7l-rbnx"/></g>`,
		"fallback": "streamline-plump:coffee-bean",
	});
}

export default Component;
