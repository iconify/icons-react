import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw4rhn4rr.css';
import '../../css/v/v76rgfs3i.css';
import '../../css/a/a2dpfgilz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yw4rhn4rr"/><path class="v76rgfs3i"/><path class="a2dpfgilz"/></g>`,
		"fallback": "reicon:garage-duotone",
	});
}

export default Component;
