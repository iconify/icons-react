import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnh3jm53u.css';
import '../../css/y/yi1c7wgvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bnh3jm53u"/><path class="yi1c7wgvn"/></g>`,
		"fallback": "reicon:book2-duotone",
	});
}

export default Component;
