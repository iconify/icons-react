import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kk2ahrb3x.css';
import '../../css/b/bb6c6h2xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kk2ahrb3x"/><path class="bb6c6h2xl"/></g>`,
		"fallback": "keyline-icons:arrow-in-up-dashed-panel-sharp-duotone",
	});
}

export default Component;
