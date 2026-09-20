import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ouh-gobdj.css';
import '../../css/y/y8vo-5bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ouh-gobdj"/><path class="y8vo-5bkd"/></g>`,
		"fallback": "keyline-icons:heading-3-sharp-duotone",
	});
}

export default Component;
