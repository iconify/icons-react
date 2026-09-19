import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8ude0bub.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8ude0bub"/>`,
		"fallback": "ei:chevron-up",
	});
}

export default Component;
