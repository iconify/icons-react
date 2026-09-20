import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4787ac0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4787ac0r"/>`,
		"fallback": "lucide:arrow-up-to-line",
	});
}

export default Component;
