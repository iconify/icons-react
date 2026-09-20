import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ca6l3jo0i.css';
import '../../css/m/mswcqsbra.css';
import '../../css/v/vy55njbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ca6l3jo0i"/><path class="mswcqsbra"/><path class="vy55njbun"/></g>`,
		"fallback": "reicon:crop2-duotone",
	});
}

export default Component;
