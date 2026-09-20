import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwa2tab4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwa2tab4p"/>`,
		"fallback": "solar:home-bold",
	});
}

export default Component;
