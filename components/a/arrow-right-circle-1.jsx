import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wylhjtbhs.css';
import '../../css/b/bmvklbcnm.css';
import '../../css/t/t97umzbjk.css';
import '../../css/x/x0-01rbgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wylhjtbhs"/><path clip-rule="evenodd" class="bmvklbcnm"/><path class="t97umzbjk"/><path clip-rule="evenodd" class="x0-01rbgq"/></g>`,
		"fallback": "streamline-plump-color:arrow-right-circle-1",
	});
}

export default Component;
