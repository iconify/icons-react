import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b71b9peon.css';
import '../../css/a/ayobaex1b.css';
import '../../css/v/vu2bvn-_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b71b9peon"/><path class="ayobaex1b"/><path class="vu2bvn-_f"/></g>`,
		"fallback": "lucide-extended:construction-duotone",
	});
}

export default Component;
