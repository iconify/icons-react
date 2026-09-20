import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lki0ay3vv.css';
import '../../css/s/skisy1f8p.css';
import '../../css/t/tj_ok-scb.css';
import '../../css/r/rwutrzc1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="lki0ay3vv"/><path class="skisy1f8p"/><path class="tj_ok-scb"/><path class="rwutrzc1n"/></g>`,
		"fallback": "streamline-plump-color:fit-to-width-square",
	});
}

export default Component;
