import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbjdh5sbc.css';
import '../../css/m/mnya4iiky.css';
import '../../css/l/lgir9oivo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbjdh5sbc"/><path class="mnya4iiky"/><path class="lgir9oivo"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-thick-up-4",
	});
}

export default Component;
