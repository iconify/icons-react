import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aud6xjhme.css';
import '../../css/y/yv7cvsqco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aud6xjhme"/><path class="yv7cvsqco"/></g>`,
		"fallback": "reicon:fuel-duotone",
	});
}

export default Component;
