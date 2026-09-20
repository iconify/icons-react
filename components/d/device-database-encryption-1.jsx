import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/y4ez66bxl.css';
import '../../css/m/mz463gbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="y4ez66bxl"/><path class="mz463gbyk"/></g>`,
		"fallback": "streamline-sharp-color:device-database-encryption-1",
	});
}

export default Component;
