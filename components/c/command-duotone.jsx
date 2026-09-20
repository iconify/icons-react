import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxpdmv6kz.css';
import '../../css/x/xug629bwe.css';
import '../../css/a/a-nja-bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oxpdmv6kz"/><path clip-rule="evenodd" class="xug629bwe"/><path class="a-nja-bsf"/></g>`,
		"fallback": "reicon:command-duotone",
	});
}

export default Component;
