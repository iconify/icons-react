import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_k8rvb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_k8rvb7i"/>`,
		"fallback": "thesvg:appian",
	});
}

export default Component;
