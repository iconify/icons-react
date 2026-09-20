import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef_udb4nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef_udb4nv"/>`,
		"fallback": "ri:eye-close-fill",
	});
}

export default Component;
