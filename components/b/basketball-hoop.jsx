import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hy95mxb0m.css';
import '../../css/b/b2qai5ksz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hy95mxb0m"/><path class="b2qai5ksz"/></g>`,
		"fallback": "marketeq:basketball-hoop",
	});
}

export default Component;
