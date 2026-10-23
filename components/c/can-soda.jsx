import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfe2m2bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfe2m2bag"/>`,
		"fallback": "vadivam:can-soda",
	});
}

export default Component;
