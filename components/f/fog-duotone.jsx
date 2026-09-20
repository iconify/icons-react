import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q2mxh1a-z.css';
import '../../css/v/v0hedxxju.css';
import '../../css/o/oj2enabfd.css';
import '../../css/c/cuwcasbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q2mxh1a-z"/><path class="v0hedxxju"/><path class="oj2enabfd"/><path class="cuwcasbwo"/></g>`,
		"fallback": "reicon:fog-duotone",
	});
}

export default Component;
