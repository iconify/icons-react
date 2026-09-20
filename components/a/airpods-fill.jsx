import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk1m2mpra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk1m2mpra"/>`,
		"fallback": "keyline-icons:airpods-fill",
	});
}

export default Component;
