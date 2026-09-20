import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enjjb4y7l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enjjb4y7l"/>`,
		"fallback": "pinhead:city-gate",
	});
}

export default Component;
