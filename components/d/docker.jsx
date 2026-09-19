import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht1y7-bwp.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht1y7-bwp"/>`,
		"fallback": "fontisto:docker",
	});
}

export default Component;
