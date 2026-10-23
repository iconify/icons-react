import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3j5e8bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3j5e8bel"/>`,
		"fallback": "vadivam:cloud-moon-rain",
	});
}

export default Component;
