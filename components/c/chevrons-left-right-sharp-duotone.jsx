import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vk-snbc5a.css';
import '../../css/t/ti5i4qb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vk-snbc5a"/><path class="ti5i4qb-f"/></g>`,
		"fallback": "keyline-icons:chevrons-left-right-sharp-duotone",
	});
}

export default Component;
