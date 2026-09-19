import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he7habbvj.css';
import '../../css/f/f358-er9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he7habbvj"/><path class="f358-er9z"/>`,
		"fallback": "boxicons:building-house",
	});
}

export default Component;
