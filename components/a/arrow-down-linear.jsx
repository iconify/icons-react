import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5l-jgbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5l-jgbvy"/>`,
		"fallback": "solar:arrow-down-linear",
	});
}

export default Component;
