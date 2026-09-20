import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rx164ab-f.css';
import '../../css/x/xc8prln3k.css';
import '../../css/o/oswetkbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rx164ab-f"/><path class="xc8prln3k"/><path class="oswetkbup"/></g>`,
		"fallback": "reicon:globe-filled",
	});
}

export default Component;
