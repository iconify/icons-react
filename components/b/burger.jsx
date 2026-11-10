import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f301k2_gd.css';
import '../../css/s/sruo9m3ew.css';
import '../../css/n/n2i_0lbfe.css';
import '../../css/h/hht_fny7m.css';
import '../../css/t/tqfpbzwoe.css';
import '../../css/f/feyf4mb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="f301k2_gd"/><path class="sruo9m3ew"/><path class="n2i_0lbfe"/><path class="hht_fny7m"/><path class="tqfpbzwoe"/><path class="feyf4mb5m"/></g>`,
		"fallback": "matita:burger",
	});
}

export default Component;
