import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ld33dpy.css';
import '../../css/x/x7pqpmbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8ld33dpy"/><path clip-rule="evenodd" class="x7pqpmbtq"/>`,
		"fallback": "solar:buildings-2-bold-duotone",
	});
}

export default Component;
