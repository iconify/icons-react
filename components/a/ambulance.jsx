import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmft_-z0e.css';
import '../../css/i/ixzyurbja.css';
import '../../css/i/iagg6rpvc.css';
import '../../css/i/il6z6ccrj.css';
import '../../css/x/xppoqqbzn.css';
import '../../css/q/qasympbtp.css';
import '../../css/c/crg6afblg.css';
import '../../css/v/vjgu4j5qx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmft_-z0e"/><path class="ixzyurbja"/><path class="iagg6rpvc"/><path class="il6z6ccrj"/><path class="xppoqqbzn"/><path class="qasympbtp"/><path class="crg6afblg"/><path class="vjgu4j5qx"/>`,
		"fallback": "fxemoji:ambulance",
	});
}

export default Component;
