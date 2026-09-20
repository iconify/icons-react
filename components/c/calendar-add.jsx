import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wzm49hbdo.css';
import '../../css/z/zggadzblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="wzm49hbdo"/><path class="zggadzblb"/></g>`,
		"fallback": "streamline-plump:calendar-add",
	});
}

export default Component;
