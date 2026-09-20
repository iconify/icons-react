import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/t08-f-bzw.css';
import '../../css/o/o1n09ou_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="t08-f-bzw"/><path class="o1n09ou_i"/></g>`,
		"fallback": "streamline-plump-color:bookmark",
	});
}

export default Component;
