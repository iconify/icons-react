import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvcyreb_u.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvcyreb_u"/>`,
		"fallback": "jam:archive",
	});
}

export default Component;
