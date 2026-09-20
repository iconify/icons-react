import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fe2q14dpp.css';
import '../../css/s/siy1ipb7s.css';
import '../../css/g/g85p_sbgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="fe2q14dpp"/><path class="siy1ipb7s"/><path class="g85p_sbgd"/></g>`,
		"fallback": "streamline-plump:database",
	});
}

export default Component;
