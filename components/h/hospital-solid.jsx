import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kffe7kb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kffe7kb8z"/>`,
		"fallback": "withicons:hospital-solid",
	});
}

export default Component;
