import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f054vmoxe.css';
import '../../css/v/v6-szcb0s.css';
import '../../css/o/odjyfubeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f054vmoxe"/><path class="v6-szcb0s"/><path clip-rule="evenodd" class="odjyfubeb"/></g>`,
		"fallback": "reicon:clipboard-list-duotone",
	});
}

export default Component;
