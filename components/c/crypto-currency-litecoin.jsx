import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc_5-wblb.css';
import '../../css/v/vvq9rh13x.css';
import '../../css/l/lem2pfw8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lc_5-wblb"/><path class="vvq9rh13x"/><path class="lem2pfw8x"/></g>`,
		"fallback": "streamline-freehand-color:crypto-currency-litecoin",
	});
}

export default Component;
