import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwkrqqb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwkrqqb2n"/>`,
		"fallback": "hugeicons:arrow-up-05",
	});
}

export default Component;
