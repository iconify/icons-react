import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw-8ixb4n.css';
import '../../css/v/vv269ibua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uw-8ixb4n"/><path class="vv269ibua"/></g>`,
		"fallback": "lucide-extended:align-vertical-justify-center-duotone",
	});
}

export default Component;
