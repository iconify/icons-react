import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xvz10obcq.css';
import '../../css/e/e24252bcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="xvz10obcq"/><path class="e24252bcn"/></g>`,
		"fallback": "streamline-plump:email-attachment-document",
	});
}

export default Component;
