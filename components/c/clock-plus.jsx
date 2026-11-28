import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmh8u_78t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmh8u_78t"/>`,
		"fallback": "noviair:clock-plus",
	});
}

export default Component;
