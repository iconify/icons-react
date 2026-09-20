import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d7pru3b-e.css';
import '../../css/i/im0ytcb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d7pru3b-e"/><path clip-rule="evenodd" class="im0ytcb8a"/></g>`,
		"fallback": "reicon:cassette2-duotone",
	});
}

export default Component;
