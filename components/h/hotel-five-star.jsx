import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vd6de3-va.css';
import '../../css/t/t473redfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vd6de3-va"/><path class="t473redfp"/></g>`,
		"fallback": "streamline-plump:hotel-five-star",
	});
}

export default Component;
