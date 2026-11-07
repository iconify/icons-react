import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud3fqxmls.css';
import '../../css/b/bdo_xv7jy.css';
import '../../css/q/q0ro-4hck.css';
import '../../css/c/cr29i4b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud3fqxmls"/><path class="bdo_xv7jy"/><path class="q0ro-4hck"/><path class="cr29i4b8c"/>`,
		"fallback": "solar:cloud-rain-bold",
	});
}

export default Component;
