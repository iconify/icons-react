import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v91ztpb9k.css';
import '../../css/j/jmxr2_b8j.css';
import '../../css/x/xj8w6jbrv.css';
import '../../css/t/trmmm4ugx.css';
import '../../css/t/t8-kmccci.css';
import '../../css/b/br7tftb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v91ztpb9k wm-shadow"/><path class="jmxr2_b8j"/><path class="xj8w6jbrv"/><path class="trmmm4ugx"/><path class="t8-kmccci"/><path class="br7tftb9h"/></g>`,
		"fallback": "withicons-retro:avatar-penguin",
	});
}

export default Component;
