import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbt61yhpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbt61yhpe"/>`,
		"fallback": "humbleicons:home",
	});
}

export default Component;
