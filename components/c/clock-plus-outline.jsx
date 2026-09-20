import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajol6ub4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajol6ub4x"/>`,
		"fallback": "mdi:clock-plus-outline",
	});
}

export default Component;
