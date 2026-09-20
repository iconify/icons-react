import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fkgek20zv.css';
import '../../css/y/y1sffzbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fkgek20zv"/><path class="y1sffzbly"/></g>`,
		"fallback": "keyline-icons:arrow-in-right-dashed-panel-sharp-duotone",
	});
}

export default Component;
