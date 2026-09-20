import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/olqttsbrn.css';
import '../../css/t/tj8-ut1cl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="olqttsbrn"/><path class="tj8-ut1cl"/></g>`,
		"fallback": "streamline-plump:hierarchy-15",
	});
}

export default Component;
