import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo6_upbad.css';
import '../../css/b/bnh3jm53u.css';
import '../../css/e/ekoeeh7wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uo6_upbad"/><path class="bnh3jm53u"/><path class="ekoeeh7wk"/></g>`,
		"fallback": "reicon:book3-duotone",
	});
}

export default Component;
