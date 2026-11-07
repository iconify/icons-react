import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3t23s65d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3t23s65d"/>`,
		"fallback": "solar:alt-arrow-left-outline",
	});
}

export default Component;
