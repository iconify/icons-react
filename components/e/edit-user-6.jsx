import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c6g_g9i_s.css';
import '../../css/p/puk478b4i.css';
import '../../css/g/gc9e2dbal.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c6g_g9i_s"/><path class="puk478b4i"/><path class="gc9e2dbal"/></g>`,
		"fallback": "marketeq:edit-user-6",
	});
}

export default Component;
