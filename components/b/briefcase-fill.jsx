import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pep7mub8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pep7mub8y"/>`,
		"fallback": "mingcute:briefcase-fill",
	});
}

export default Component;
