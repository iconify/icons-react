import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5j55ub6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5j55ub6c"/>`,
		"fallback": "griddy-icons:cloud-alt-02",
	});
}

export default Component;
