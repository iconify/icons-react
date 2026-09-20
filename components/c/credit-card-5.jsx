import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gil2yfb_x.css';
import '../../css/b/b36_fz8rd.css';
import '../../css/x/xm0r4go8l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="gil2yfb_x"/><path class="b36_fz8rd"/><path class="xm0r4go8l"/></g>`,
		"fallback": "streamline-plump:credit-card-5",
	});
}

export default Component;
