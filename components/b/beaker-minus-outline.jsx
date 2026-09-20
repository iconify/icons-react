import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cezb6vb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cezb6vb6m"/>`,
		"fallback": "mdi:beaker-minus-outline",
	});
}

export default Component;
