import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b7t7ibc2v.css';
import '../../css/h/htb6pgboo.css';
import '../../css/m/mvi-sobpr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b7t7ibc2v"/><path class="htb6pgboo"/><path class="mvi-sobpr"/></g>`,
		"fallback": "streamline-plump-color:fish",
	});
}

export default Component;
