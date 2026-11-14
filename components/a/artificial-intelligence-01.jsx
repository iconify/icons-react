import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je3s1s1ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je3s1s1ux"/>`,
		"fallback": "hugeicons:artificial-intelligence-01",
	});
}

export default Component;
