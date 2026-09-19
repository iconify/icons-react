import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zr82e6b_c.css';
import '../../css/m/m2r2ijbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zr82e6b_c"/><path class="m2r2ijbgo"/></g>`,
		"fallback": "hugeicons:file-heart",
	});
}

export default Component;
