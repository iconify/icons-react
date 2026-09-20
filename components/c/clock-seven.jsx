import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k81cs34vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k81cs34vx"/>`,
		"fallback": "uit:clock-seven",
	});
}

export default Component;
