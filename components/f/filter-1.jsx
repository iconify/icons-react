import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wiamversl.css';
import '../../css/s/szyqc-9ku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wiamversl"/><path class="szyqc-9ku"/></g>`,
		"fallback": "streamline-plump-color:filter-1",
	});
}

export default Component;
