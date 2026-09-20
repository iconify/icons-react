import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/p/p911rmthn.css';
import '../../css/g/gaaok0mkb.css';
import '../../css/w/wnxwnsdgl.css';
import '../../css/s/sxi8uuh3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="p911rmthn"/><path class="gaaok0mkb"/><path class="wnxwnsdgl"/><path class="sxi8uuh3m"/></g>`,
		"fallback": "solar:checklist-minimalistic-bold-duotone",
	});
}

export default Component;
