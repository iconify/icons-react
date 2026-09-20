import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du7gv6bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du7gv6bui"/>`,
		"fallback": "streamline-cyber:cloud-transfer-half",
	});
}

export default Component;
