import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz_gpjb-q.css';
import '../../css/f/fd5m_9b2i.css';
import '../../css/l/l5bme_e1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz_gpjb-q"/><path class="fd5m_9b2i"/><path class="l5bme_e1a"/></g>`,
		"fallback": "andrsrxn:experiment",
	});
}

export default Component;
