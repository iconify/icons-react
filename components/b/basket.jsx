import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjngo4b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjngo4b-f"/>`,
		"fallback": "humbleicons:basket",
	});
}

export default Component;
