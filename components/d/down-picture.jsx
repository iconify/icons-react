import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shisbnbwb.css';
import '../../css/i/iewszzp0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shisbnbwb"/><path class="iewszzp0y"/></g>`,
		"fallback": "icon-park-outline:down-picture",
	});
}

export default Component;
