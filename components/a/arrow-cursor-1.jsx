import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jnntlqc4g.css';
import '../../css/s/saa4e3bia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="jnntlqc4g"/><path class="saa4e3bia"/></g>`,
		"fallback": "streamline-plump-color:arrow-cursor-1",
	});
}

export default Component;
