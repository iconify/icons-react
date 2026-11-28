import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyx-p81np.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyx-p81np"/>`,
		"fallback": "pullo:clock-plus-bold",
	});
}

export default Component;
