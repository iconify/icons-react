import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg2b60bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg2b60bqv"/>`,
		"fallback": "mingcute:glass-cup-line",
	});
}

export default Component;
