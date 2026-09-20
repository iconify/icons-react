import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxtniz0hl.css';
import '../../css/x/xcdmjzfnz.css';
import '../../css/m/mnblu6bxo.css';
import '../../css/b/b_f5r9ekh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxtniz0hl"/><path clip-rule="evenodd" class="xcdmjzfnz"/><path class="mnblu6bxo"/><path class="b_f5r9ekh"/></g>`,
		"fallback": "reicon:balloon-duotone",
	});
}

export default Component;
