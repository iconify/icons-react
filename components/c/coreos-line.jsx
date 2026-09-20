import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj0gvyo2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj0gvyo2h"/>`,
		"fallback": "ri:coreos-line",
	});
}

export default Component;
