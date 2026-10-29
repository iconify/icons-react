import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihh9i5bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihh9i5bby"/>`,
		"fallback": "withicons:bamboo-solid",
	});
}

export default Component;
