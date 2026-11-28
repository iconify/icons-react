import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy-7kibrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy-7kibrw"/>`,
		"fallback": "noviair:bar-chart",
	});
}

export default Component;
