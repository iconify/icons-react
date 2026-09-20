import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p7-4i_btc.css';
import '../../css/q/q9sd8hbki.css';
import '../../css/s/s5oju0f4i.css';
import '../../css/q/qac792bpu.css';
import '../../css/h/hww-gf21m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p7-4i_btc"/><path class="q9sd8hbki"/><path class="s5oju0f4i"/><path class="qac792bpu"/><path class="hww-gf21m"/></g>`,
		"fallback": "streamline-plump-color:alien",
	});
}

export default Component;
