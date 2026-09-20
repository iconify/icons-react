import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n6x0dbbwd.css';
import '../../css/d/da91uxbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n6x0dbbwd"/><path class="da91uxbtb"/></g>`,
		"fallback": "keyline-icons:code-xml-sharp-duotone",
	});
}

export default Component;
