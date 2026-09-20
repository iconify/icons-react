import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qa0r4-b7l.css';
import '../../css/o/omo2j4d-w.css';
import '../../css/d/d-sztwbjt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qa0r4-b7l"/><path class="omo2j4d-w"/><path class="d-sztwbjt"/></g>`,
		"fallback": "streamline-plump:earpods",
	});
}

export default Component;
