import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jtvblfbnn.css';
import '../../css/d/d3db8y05a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jtvblfbnn"/><path class="d3db8y05a"/></g>`,
		"fallback": "solar:arrow-right-up-bold-duotone",
	});
}

export default Component;
