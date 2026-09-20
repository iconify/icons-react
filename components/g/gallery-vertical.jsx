import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gtklzcyuo.css';
import '../../css/n/nz26t1bjz.css';
import '../../css/e/e4mo_8b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gtklzcyuo"/><rect class="nz26t1bjz"/><path class="e4mo_8b_s"/></g>`,
		"fallback": "lucide:gallery-vertical",
	});
}

export default Component;
