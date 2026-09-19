import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rslo40inv.css';
import '../../css/r/rwsq_83pk.css';
import '../../css/w/warcgn-bq.css';
import '../../css/o/ov0_cbb6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rslo40inv"/><path class="rwsq_83pk"/><path class="warcgn-bq"/><path class="ov0_cbb6t"/>`,
		"fallback": "fxemoji:creditcard",
	});
}

export default Component;
