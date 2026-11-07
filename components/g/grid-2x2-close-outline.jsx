import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln-hxshjc.css';
import '../../css/o/oiqop8ebf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln-hxshjc"/><path class="oiqop8ebf"/>`,
		"fallback": "solar:grid-2x2-close-outline",
	});
}

export default Component;
