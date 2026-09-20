import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zbksxgb9w.css';
import '../../css/f/fwsy9ub_q.css';
import '../../css/l/lrv651b1a.css';
import '../../css/k/k60ilzbbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zbksxgb9w"/><path class="fwsy9ub_q"/><path class="lrv651b1a"/><path class="k60ilzbbp"/></g>`,
		"fallback": "streamline-plump-color:battery-low-3",
	});
}

export default Component;
