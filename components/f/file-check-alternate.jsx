import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u-opbqb_r.css';
import '../../css/m/mqxpji4_t.css';
import '../../css/j/j4kpp5b_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u-opbqb_r"/><path class="mqxpji4_t"/><path class="j4kpp5b_c"/></g>`,
		"fallback": "streamline-plump:file-check-alternate",
	});
}

export default Component;
