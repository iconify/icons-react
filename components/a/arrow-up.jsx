import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe513_xmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe513_xmw"/>`,
		"fallback": "heroicons-outline:arrow-up",
	});
}

export default Component;
