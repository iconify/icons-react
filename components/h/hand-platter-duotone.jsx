import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fz9369zld.css';
import '../../css/g/g-zp8bb9f.css';
import '../../css/v/vl2k-fw5k.css';
import '../../css/t/t3p0bzbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fz9369zld"/><path class="g-zp8bb9f"/><path class="vl2k-fw5k"/><path class="t3p0bzbje"/></g>`,
		"fallback": "lucide-extended:hand-platter-duotone",
	});
}

export default Component;
