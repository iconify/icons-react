import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd4exubgp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd4exubgp"/>`,
		"fallback": "foundation:align-right",
	});
}

export default Component;
