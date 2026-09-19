import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpkd6tnhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpkd6tnhm"/>`,
		"fallback": "boxicons:film",
	});
}

export default Component;
