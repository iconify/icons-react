import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmhkdacuh.css';
import '../../css/d/donk93jwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmhkdacuh"/><path clip-rule="evenodd" class="donk93jwp"/></g>`,
		"fallback": "reicon:flash-drive-duotone",
	});
}

export default Component;
