import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv1rtebcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv1rtebcy"/>`,
		"fallback": "eva:edit-2-fill",
	});
}

export default Component;
