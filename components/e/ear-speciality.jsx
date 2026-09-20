import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/ipozopb3w.css';
import '../../css/q/qcq5enbfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ipozopb3w"/><path class="qcq5enbfl"/></g>`,
		"fallback": "streamline-plump:ear-speciality",
	});
}

export default Component;
