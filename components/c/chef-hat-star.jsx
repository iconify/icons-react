import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgpwz3b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgpwz3b3d"/>`,
		"fallback": "noviair-light:chef-hat-star",
	});
}

export default Component;
