import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/l7udlhshy.css';
import '../../css/i/i582-vbiv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="l7udlhshy"/><path class="i582-vbiv"/></g>`,
		"fallback": "streamline-plump:information-desk",
	});
}

export default Component;
