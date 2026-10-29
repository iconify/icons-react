import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn76f6a6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn76f6a6y"/>`,
		"fallback": "withicons:arrow-up-solid",
	});
}

export default Component;
