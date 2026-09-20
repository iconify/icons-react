import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oexwiotep.css';
import '../../css/n/nboirytbo.css';
import '../../css/y/yt6hup7za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oexwiotep"/><path class="nboirytbo"/><path class="yt6hup7za"/></g>`,
		"fallback": "solar:cup-paper-bold-duotone",
	});
}

export default Component;
