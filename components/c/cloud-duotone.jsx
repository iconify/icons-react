import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrgergi8m.css';
import '../../css/f/fmfi5bcjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wrgergi8m"/><path class="fmfi5bcjp"/></g>`,
		"fallback": "lucide-extended:cloud-duotone",
	});
}

export default Component;
