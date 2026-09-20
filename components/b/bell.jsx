import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/rkbitbb0u.css';
import '../../css/v/v9wvumb_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="rkbitbb0u"/><path class="v9wvumb_x"/></g>`,
		"fallback": "streamline-plump:bell",
	});
}

export default Component;
