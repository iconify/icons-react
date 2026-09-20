import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mqrcukb4u.css';
import '../../css/m/mpcx-rbiw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="mqrcukb4u"/><path class="mpcx-rbiw"/></g>`,
		"fallback": "marketeq:dome",
	});
}

export default Component;
