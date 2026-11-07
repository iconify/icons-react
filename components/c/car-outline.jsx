import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-klr3bdo.css';
import '../../css/e/e8icw_b4f.css';
import '../../css/w/ws9d_1b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-klr3bdo"/><path class="e8icw_b4f"/><path clip-rule="evenodd" class="ws9d_1b9t"/>`,
		"fallback": "solar:car-outline",
	});
}

export default Component;
