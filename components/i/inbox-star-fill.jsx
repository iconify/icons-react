import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7uwmjy0t.css';
import '../../css/m/mg-6g4b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7uwmjy0t"/><path class="mg-6g4b_b"/>`,
		"fallback": "mage:inbox-star-fill",
	});
}

export default Component;
