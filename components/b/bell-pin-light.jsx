import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8pej6b5h.css';
import '../../css/h/hzsbvcczg.css';
import '../../css/l/le0nq6m2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t8pej6b5h"/><path class="hzsbvcczg"/><circle class="le0nq6m2b"/></g>`,
		"fallback": "lets-icons:bell-pin-light",
	});
}

export default Component;
