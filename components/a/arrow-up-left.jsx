import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhyjf-b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhyjf-b9k"/>`,
		"fallback": "keyline-icons:arrow-up-left",
	});
}

export default Component;
