import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0x4gpamw.css';
import '../../css/r/r0axpsbgp.css';
import '../../css/k/kkuzcmutw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0x4gpamw"/><path class="r0axpsbgp"/><path class="kkuzcmutw"/>`,
		"fallback": "fxemoji:circledideographadvantage",
	});
}

export default Component;
