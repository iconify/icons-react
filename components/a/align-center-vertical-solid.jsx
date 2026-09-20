import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojps68ppa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojps68ppa"/>`,
		"fallback": "teenyicons:align-center-vertical-solid",
	});
}

export default Component;
