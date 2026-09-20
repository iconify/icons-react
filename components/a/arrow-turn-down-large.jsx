import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/z/z3zqi1lzk.css';
import '../../css/b/brsl2mb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="z3zqi1lzk"/><path class="brsl2mb1u"/></g>`,
		"fallback": "streamline-sharp-color:arrow-turn-down-large",
	});
}

export default Component;
