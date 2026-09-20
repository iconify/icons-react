import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54l429zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g54l429zx"/>`,
		"fallback": "si:direction-alt-fill",
	});
}

export default Component;
