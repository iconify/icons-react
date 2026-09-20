import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoc34syxh.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoc34syxh"/>`,
		"fallback": "jam:header-3",
	});
}

export default Component;
