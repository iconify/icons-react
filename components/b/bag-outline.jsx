import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gena9bc0p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gena9bc0p"/>`,
		"fallback": "teenyicons:bag-outline",
	});
}

export default Component;
