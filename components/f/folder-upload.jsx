import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvls4cbah.css';
import '../../css/a/a0c3lvbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gvls4cbah"/><path class="a0c3lvbkm"/></g>`,
		"fallback": "hugeicons:folder-upload",
	});
}

export default Component;
