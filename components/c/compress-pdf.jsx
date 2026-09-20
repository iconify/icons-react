import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/isus05bjz.css';
import '../../css/r/r1mklccun.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="isus05bjz"/><path class="r1mklccun"/></g>`,
		"fallback": "streamline-plump-color:compress-pdf",
	});
}

export default Component;
