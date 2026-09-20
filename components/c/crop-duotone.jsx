import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgu9_jvrv.css';
import '../../css/z/zgs-n91xq.css';
import '../../css/v/v2kjj4bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jgu9_jvrv"/><path class="zgs-n91xq"/><path class="v2kjj4bmb"/></g>`,
		"fallback": "reicon:crop-duotone",
	});
}

export default Component;
