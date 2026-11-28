import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qls5jlb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qls5jlb3t"/>`,
		"fallback": "noviair:database-alert",
	});
}

export default Component;
