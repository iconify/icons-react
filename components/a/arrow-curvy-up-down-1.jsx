import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnl716bby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnl716bby"/>`,
		"fallback": "streamline-color:arrow-curvy-up-down-1",
	});
}

export default Component;
