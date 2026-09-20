import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ox-f2-brs.css';
import '../../css/a/a4lf8gunw.css';
import '../../css/z/zggadzblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ox-f2-brs"/><path class="a4lf8gunw"/><path class="zggadzblb"/></g>`,
		"fallback": "streamline-plump:calendar-heart",
	});
}

export default Component;
