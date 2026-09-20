import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x7tri2bmi.css';
import '../../css/f/fuz56yuih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="x7tri2bmi"/><path class="fuz56yuih"/></g>`,
		"fallback": "streamline-plump:hand-held",
	});
}

export default Component;
