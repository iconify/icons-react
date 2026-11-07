import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux5jk213g.css';
import '../../css/l/l8p24vbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ux5jk213g"/><path class="l8p24vbxj"/>`,
		"fallback": "solar:call-cancel-outline",
	});
}

export default Component;
