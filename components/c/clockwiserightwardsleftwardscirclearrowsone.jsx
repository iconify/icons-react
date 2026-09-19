import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu5b3g62n.css';
import '../../css/l/lkpw8_1oe.css';
import '../../css/i/ig4m5q9hu.css';
import '../../css/i/ibby-ym8u.css';
import '../../css/m/mfcixzfvw.css';
import '../../css/j/jutc9ccxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu5b3g62n"/><path class="lkpw8_1oe"/><path class="ig4m5q9hu"/><path class="ibby-ym8u"/><path class="mfcixzfvw"/><path class="jutc9ccxs"/>`,
		"fallback": "fxemoji:clockwiserightwardsleftwardscirclearrowsone",
	});
}

export default Component;
