import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ebrqn7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2ebrqn7o"/>`,
		"fallback": "akar-icons:circle-triangle-right-fill",
	});
}

export default Component;
