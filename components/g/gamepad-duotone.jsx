import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_do13lnm.css';
import '../../css/k/kgcffbbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_do13lnm"/><path class="kgcffbbmj"/></g>`,
		"fallback": "lucide-extended:gamepad-duotone",
	});
}

export default Component;
