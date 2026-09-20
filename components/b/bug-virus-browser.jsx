import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vsos4876z.css';
import '../../css/n/n_9y8hjgn.css';
import '../../css/i/iugifwb1o.css';
import '../../css/m/m28tkfzua.css';
import '../../css/q/qme9tbtrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vsos4876z"/><path class="n_9y8hjgn"/><path class="iugifwb1o"/><path class="m28tkfzua"/><path class="qme9tbtrp"/></g>`,
		"fallback": "streamline-sharp-color:bug-virus-browser",
	});
}

export default Component;
