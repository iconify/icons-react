import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/u/ukqcribus.css';
import '../../css/o/otq39xo5k.css';
import '../../css/q/qgfsrx38k.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="u9hq09b6k"/><path class="ukqcribus"/><path class="otq39xo5k"/><path class="qgfsrx38k"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-antigua-and-barbuda",
	});
}

export default Component;
