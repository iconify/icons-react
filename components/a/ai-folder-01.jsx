import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwpmqo6cv.css';
import '../../css/r/r0t7sbc_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cwpmqo6cv"/><path class="r0t7sbc_z"/></g>`,
		"fallback": "hugeicons:ai-folder-01",
	});
}

export default Component;
