import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caf2-sbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caf2-sbzm"/>`,
		"fallback": "lucide:arrow-right-to-line",
	});
}

export default Component;
