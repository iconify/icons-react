import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w66qzd0ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w66qzd0ur"/>`,
		"fallback": "tabler:archive-filled",
	});
}

export default Component;
