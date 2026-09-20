import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tnwzkcbdx.css';
import '../../css/j/j-abtrmhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tnwzkcbdx"/><path class="j-abtrmhq"/></g>`,
		"fallback": "streamline-plump-color:arrow-expand",
	});
}

export default Component;
