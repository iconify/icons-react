import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0udpcchx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g0udpcchx"/>`,
		"fallback": "solar:black-hole-2-outline",
	});
}

export default Component;
