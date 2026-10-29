import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/touros3ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="touros3ng"/>`,
		"fallback": "withicons:folder-up-solid",
	});
}

export default Component;
