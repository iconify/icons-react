import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o8s13id_g.css';
import '../../css/e/erywxf8wz.css';
import '../../css/u/ub5j2f5wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o8s13id_g"/><path class="erywxf8wz"/><path class="ub5j2f5wj"/></g>`,
		"fallback": "hugeicons:image-done-01",
	});
}

export default Component;
