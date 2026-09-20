import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tatkx4b6m.css';
import '../../css/b/bopstub_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tatkx4b6m"/><path class="bopstub_u"/></g>`,
		"fallback": "streamline-plump-color:gold",
	});
}

export default Component;
