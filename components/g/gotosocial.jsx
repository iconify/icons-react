import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dku_o5bqt.css';
import '../../css/t/te7xw1bpj.css';
import '../../css/x/xq9ezhb2m.css';
import '../../css/x/xu878qu8u.css';
import '../../css/u/uarjyd69g.css';
import '../../css/e/ewwzl8e4s.css';
import '../../css/c/cw75nqbay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dku_o5bqt"/><path class="te7xw1bpj"/><path class="xq9ezhb2m"/><path class="xu878qu8u"/><path class="uarjyd69g"/><path class="ewwzl8e4s"/><path class="cw75nqbay"/>`,
		"fallback": "selfhst:gotosocial",
	});
}

export default Component;
