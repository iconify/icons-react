import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_p1nbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_p1nbxt"/>`,
		"fallback": "si:clear-all-fill",
	});
}

export default Component;
