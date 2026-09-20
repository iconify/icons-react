import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbluk9b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbluk9b-l"/>`,
		"fallback": "mage:arrow-up-right-square-fill",
	});
}

export default Component;
