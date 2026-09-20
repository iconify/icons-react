import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-8xe4ono.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-8xe4ono"/>`,
		"fallback": "ri:forbid-fill",
	});
}

export default Component;
