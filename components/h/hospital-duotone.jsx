import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxe1cpbak.css';
import '../../css/z/zq20o_lec.css';
import '../../css/e/ex-x_5bvm.css';
import '../../css/v/vhi0hdc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxe1cpbak"/><path class="zq20o_lec"/><path class="ex-x_5bvm"/><path class="vhi0hdc0k"/></g>`,
		"fallback": "lucide-extended:hospital-duotone",
	});
}

export default Component;
