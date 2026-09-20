import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/i3iq91bdy.css';
import '../../css/g/g_ozs_7xf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="i3iq91bdy"/><path class="g_ozs_7xf"/></g>`,
		"fallback": "streamline-plump:file-folder",
	});
}

export default Component;
