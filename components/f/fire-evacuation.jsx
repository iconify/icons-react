import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kbsp6ebnd.css';
import '../../css/k/kiit49bvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="kbsp6ebnd"/><path class="kiit49bvi"/></g>`,
		"fallback": "streamline-plump:fire-evacuation",
	});
}

export default Component;
