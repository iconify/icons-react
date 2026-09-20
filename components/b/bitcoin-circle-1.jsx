import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d7fcmubvd.css';
import '../../css/n/nvfv0uzwv.css';
import '../../css/g/gavebgz5n.css';
import '../../css/t/teuc2rbxh.css';
import '../../css/d/d-vhul5tq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d7fcmubvd"/><path class="nvfv0uzwv"/><path class="gavebgz5n"/><path class="teuc2rbxh"/><path class="d-vhul5tq"/></g>`,
		"fallback": "streamline-plump-color:bitcoin-circle-1",
	});
}

export default Component;
