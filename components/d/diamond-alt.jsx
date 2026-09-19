import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kht38ccar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kht38ccar"/>`,
		"fallback": "boxicons:diamond-alt",
	});
}

export default Component;
