import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elro_nbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elro_nbem"/>`,
		"fallback": "withicons:avatar-frog-solid",
	});
}

export default Component;
