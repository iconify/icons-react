import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a9qq5obmi.css';
import '../../css/g/ghi5_wb7c.css';
import '../../css/z/zr846pb6r.css';
import '../../css/y/yigrcjbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a9qq5obmi"/><path class="ghi5_wb7c"/><path class="zr846pb6r"/><path class="yigrcjbsp"/></g>`,
		"fallback": "solar:bag-4-line-duotone",
	});
}

export default Component;
