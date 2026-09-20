import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cznruvbvt.css';
import '../../css/c/chixjsepu.css';
import '../../css/i/ixq7gpbhu.css';
import '../../css/e/ev1h7fb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cznruvbvt"/><path class="chixjsepu"/><path class="ixq7gpbhu"/><path class="ev1h7fb7b"/></g>`,
		"fallback": "solar:home-wi-fi-angle-bold-duotone",
	});
}

export default Component;
