import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d_3cn5lgt.css';
import '../../css/a/as_2tqywd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="d_3cn5lgt"/><path class="as_2tqywd"/></g>`,
		"fallback": "streamline-plump:beach",
	});
}

export default Component;
