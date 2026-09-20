import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gjthifbuo.css';
import '../../css/b/bilobqb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gjthifbuo"/><path class="bilobqb5s"/></g>`,
		"fallback": "keyline-icons:globe-plus-sharp-duotone",
	});
}

export default Component;
