import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1lhz8bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1lhz8bdp"/>`,
		"fallback": "heroicons-outline:arrow-uturn-left",
	});
}

export default Component;
