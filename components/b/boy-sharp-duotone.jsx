import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hzcqmnfdu.css';
import '../../css/m/mz62r9oet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hzcqmnfdu"/><path class="mz62r9oet"/></g>`,
		"fallback": "keyline-icons:boy-sharp-duotone",
	});
}

export default Component;
