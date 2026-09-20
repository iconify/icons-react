import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk9no8l7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk9no8l7t"/>`,
		"fallback": "keyline-icons:bar-chart-down-fill",
	});
}

export default Component;
