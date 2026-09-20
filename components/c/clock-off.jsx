import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zy93ic7yd.css';
import '../../css/m/mhdxriite.css';
import '../../css/h/hjiy5kq8c.css';
import '../../css/e/ektp6ob5f.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zy93ic7yd"/><path clip-rule="evenodd" class="mhdxriite"/><path clip-rule="evenodd" class="hjiy5kq8c"/><path clip-rule="evenodd" class="ektp6ob5f"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:clock-off",
	});
}

export default Component;
