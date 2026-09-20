import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yokjecbgj.css';
import '../../css/r/rhnq8dbip.css';
import '../../css/i/iejvc431p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="yokjecbgj"/><path class="rhnq8dbip"/><path class="iejvc431p"/></g>`,
		"fallback": "streamline-plump:arrow-right-circle-2",
	});
}

export default Component;
