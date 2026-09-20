import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3mt6e6zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3mt6e6zb"/>`,
		"fallback": "mingcute:bomb-fill",
	});
}

export default Component;
