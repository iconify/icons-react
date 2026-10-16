import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_cy8mp5b.css';
import '../../css/u/utxw2owpr.css';
import '../../css/s/skpc7ne_l.css';
import '../../css/r/rqnz9vbnk.css';
import '../../css/w/w44r4hb9w.css';
import '../../css/k/kvnl1mb4n.css';
import '../../css/j/j2u0-7brx.css';
import '../../css/r/ra08_tb0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_cy8mp5b"/><path class="utxw2owpr"/><path class="skpc7ne_l"/><path class="rqnz9vbnk"/><path class="w44r4hb9w"/><path class="kvnl1mb4n"/><path class="j2u0-7brx"/><path class="ra08_tb0t"/>`,
		"fallback": "energy-icons:capacitor-bank-48-bold",
	});
}

export default Component;
