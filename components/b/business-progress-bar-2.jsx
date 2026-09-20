import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cr0c0t24e.css';
import '../../css/v/v0brx5bqi.css';
import '../../css/w/wukm_ub6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="cr0c0t24e"/><path class="v0brx5bqi"/><path class="wukm_ub6v"/></g>`,
		"fallback": "streamline-plump-color:business-progress-bar-2",
	});
}

export default Component;
