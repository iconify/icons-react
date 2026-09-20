import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/audx4-b0p.css';
import '../../css/p/pwd6rdbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="audx4-b0p"/><path class="pwd6rdbok"/>`,
		"fallback": "lineicons:amazon",
	});
}

export default Component;
