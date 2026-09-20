import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x99ddobuv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x99ddobuv"/>`,
		"fallback": "streamline-color:arrow-crossover-up",
	});
}

export default Component;
