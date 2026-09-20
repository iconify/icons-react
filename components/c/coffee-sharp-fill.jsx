import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hy82feb9n.css';
import '../../css/r/rutkrebqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hy82feb9n"/><path class="rutkrebqi"/></g>`,
		"fallback": "keyline-icons:coffee-sharp-fill",
	});
}

export default Component;
