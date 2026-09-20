import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziblf8w-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziblf8w-x"/>`,
		"fallback": "mdi:face-devil-outline",
	});
}

export default Component;
