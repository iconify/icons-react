import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p__pg-_7m.css';
import '../../css/g/gxcbjqbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p__pg-_7m"/><path class="gxcbjqbdk"/></g>`,
		"fallback": "solar:i-phone-bold-duotone",
	});
}

export default Component;
