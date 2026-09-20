import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj0oiablv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj0oiablv"/>`,
		"fallback": "teenyicons:bath-outline",
	});
}

export default Component;
