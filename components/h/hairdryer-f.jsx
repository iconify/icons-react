import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khk5qrb_y.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khk5qrb_y"/>`,
		"fallback": "jam:hairdryer-f",
	});
}

export default Component;
