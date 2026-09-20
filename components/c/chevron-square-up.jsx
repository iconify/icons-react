import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euxjhwbbd.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euxjhwbbd"/>`,
		"fallback": "jam:chevron-square-up",
	});
}

export default Component;
