import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nor8u-b6r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nor8u-b6r"/>`,
		"fallback": "teenyicons:framer-outline",
	});
}

export default Component;
