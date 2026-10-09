import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chwqx0x_b.css';
import '../../css/f/fm25kwqqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chwqx0x_b"/><path class="fm25kwqqn"/>`,
		"fallback": "energy-icons:briefcase-48",
	});
}

export default Component;
