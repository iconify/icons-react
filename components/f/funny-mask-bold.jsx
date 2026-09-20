import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqmb-4fki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqmb-4fki"/>`,
		"fallback": "streamline-ultimate:funny-mask-bold",
	});
}

export default Component;
