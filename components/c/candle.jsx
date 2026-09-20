import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/spq_11b1q.css';
import '../../css/l/l602x0xcs.css';
import '../../css/s/swo5wpbib.css';
import '../../css/i/ii_bipr0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="spq_11b1q"/><path class="l602x0xcs"/><path class="swo5wpbib"/><path class="ii_bipr0u"/></g>`,
		"fallback": "streamline-sharp-color:candle",
	});
}

export default Component;
