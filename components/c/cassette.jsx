import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wzk7k_3ye.css';
import '../../css/o/ovgpfrqpy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wzk7k_3ye"/><path class="ovgpfrqpy"/></g>`,
		"fallback": "marketeq:cassette",
	});
}

export default Component;
