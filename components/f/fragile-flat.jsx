import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtfos8bwl.css';
import '../../css/t/tf78qob0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vtfos8bwl"/><path class="tf78qob0n"/></g>`,
		"fallback": "streamline-plump-color:fragile-flat",
	});
}

export default Component;
