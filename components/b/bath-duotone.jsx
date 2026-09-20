import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v337hcc-y.css';
import '../../css/d/dsfc-koya.css';
import '../../css/g/gjxj3tdsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v337hcc-y"/><path class="dsfc-koya"/><path class="gjxj3tdsz"/></g>`,
		"fallback": "reicon:bath-duotone",
	});
}

export default Component;
