import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht8hvn-4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht8hvn-4d"/>`,
		"fallback": "ri:external-link-fill",
	});
}

export default Component;
