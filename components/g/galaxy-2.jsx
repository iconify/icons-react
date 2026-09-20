import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kpokh7e_t.css';
import '../../css/e/ey-w_vbnf.css';
import '../../css/u/ukoe6ib7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="kpokh7e_t"/><path class="ey-w_vbnf"/><path class="ukoe6ib7t"/></g>`,
		"fallback": "streamline-plump:galaxy-2",
	});
}

export default Component;
