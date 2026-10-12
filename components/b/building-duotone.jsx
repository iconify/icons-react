import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g59gntb1d.css';
import '../../css/p/pkr94_b0t.css';
import '../../css/p/pihw0xj_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g59gntb1d"/><path class="pkr94_b0t"/><path class="pihw0xj_y"/></g>`,
		"fallback": "lucide-extended:building-duotone",
	});
}

export default Component;
