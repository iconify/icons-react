import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi2973b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi2973b7u"/>`,
		"fallback": "vadivam:car-front",
	});
}

export default Component;
