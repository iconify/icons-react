import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t186o8euu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary t186o8euu"/>`,
		"fallback": "iconaut:brain-duotone",
	});
}

export default Component;
