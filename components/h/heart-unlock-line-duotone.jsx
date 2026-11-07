import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sed2gybpz.css';
import '../../css/z/ztulofeqi.css';
import '../../css/r/r5lvzac_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sed2gybpz"/><path class="ztulofeqi"/><path class="r5lvzac_c"/></g>`,
		"fallback": "solar:heart-unlock-line-duotone",
	});
}

export default Component;
