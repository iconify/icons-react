import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyw0a_b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyw0a_b2m"/>`,
		"fallback": "mdi:beaker-plus-outline",
	});
}

export default Component;
