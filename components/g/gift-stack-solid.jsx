import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-977cbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-977cbwx"/>`,
		"fallback": "withicons:gift-stack-solid",
	});
}

export default Component;
