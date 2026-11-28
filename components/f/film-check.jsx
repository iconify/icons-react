import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9qo84e_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9qo84e_z"/>`,
		"fallback": "noviair-light:film-check",
	});
}

export default Component;
