import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kli4i-b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kli4i-b9o"/>`,
		"fallback": "tdesign:fahrenheit-scale",
	});
}

export default Component;
