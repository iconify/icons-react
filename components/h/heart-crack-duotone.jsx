import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4zf9acth.css';
import '../../css/w/wur5sk_cm.css';
import '../../css/m/mhs587lgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4zf9acth"/><path class="wur5sk_cm"/><path class="mhs587lgj"/></g>`,
		"fallback": "lucide-extended:heart-crack-duotone",
	});
}

export default Component;
