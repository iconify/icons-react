import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/n_0y57q2y.css';
import '../../css/p/pud426lit.css';
import '../../css/r/rws_w2lsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="n_0y57q2y"/><path class="pud426lit"/><path class="rws_w2lsi"/></g>`,
		"fallback": "streamline-sharp-color:electric-cord-3",
	});
}

export default Component;
