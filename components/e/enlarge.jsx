import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhyc_yb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhyc_yb7n"/>`,
		"fallback": "iconoir:enlarge",
	});
}

export default Component;
