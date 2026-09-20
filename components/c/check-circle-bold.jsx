import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svxrt0bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="svxrt0bfj"/>`,
		"fallback": "solar:check-circle-bold",
	});
}

export default Component;
