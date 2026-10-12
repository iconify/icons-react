import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wj592f-ca.css';
import '../../css/c/cm759jbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wj592f-ca"/><path class="cm759jbox"/></g>`,
		"fallback": "lucide-extended:cross-duotone",
	});
}

export default Component;
