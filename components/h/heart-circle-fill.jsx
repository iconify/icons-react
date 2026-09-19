import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb870rb7t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb870rb7t"/>`,
		"fallback": "f7:heart-circle-fill",
	});
}

export default Component;
