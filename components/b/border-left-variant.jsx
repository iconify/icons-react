import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aro9nj3gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aro9nj3gw"/>`,
		"fallback": "mdi:border-left-variant",
	});
}

export default Component;
