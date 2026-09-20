import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x7ebtzofq.css';
import '../../css/a/a8y1q9nrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="x7ebtzofq"/><path class="a8y1q9nrc"/></g>`,
		"fallback": "streamline-plump-color:door",
	});
}

export default Component;
