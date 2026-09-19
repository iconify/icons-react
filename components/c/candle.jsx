import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpgnzm0ee.css';
import '../../css/q/qceextqrn.css';
import '../../css/m/mdb2_kuhb.css';
import '../../css/p/pnyyfkb6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpgnzm0ee"/><ellipse class="qceextqrn"/><path class="mdb2_kuhb"/><path class="pnyyfkb6b"/>`,
		"fallback": "fxemoji:candle",
	});
}

export default Component;
