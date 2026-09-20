import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1db_x1ez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1db_x1ez"/>`,
		"fallback": "streamline:computer-logo-linkedin-network-linkedin-professional",
	});
}

export default Component;
