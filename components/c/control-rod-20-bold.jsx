import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-9c7jf-e.css';
import '../../css/l/la3uc6bkj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-9c7jf-e"/><path class="la3uc6bkj"/>`,
		"fallback": "energy-icons:control-rod-20-bold",
	});
}

export default Component;
