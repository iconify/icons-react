import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xlmqkwltw.css';
import '../../css/i/i46k68_po.css';
import '../../css/o/o52l4h76n.css';
import '../../css/m/m4jdgyb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xlmqkwltw"/><path class="i46k68_po"/><path class="o52l4h76n"/><path class="m4jdgyb6c"/></g>`,
		"fallback": "solar:banknote-broken",
	});
}

export default Component;
