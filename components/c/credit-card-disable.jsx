import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sqqk1noza.css';
import '../../css/m/mjtz0qljx.css';
import '../../css/d/dmg50-bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sqqk1noza"/><path class="mjtz0qljx"/><path class="dmg50-bzr"/></g>`,
		"fallback": "streamline-sharp-color:credit-card-disable",
	});
}

export default Component;
