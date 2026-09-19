import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w02dggg3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w02dggg3a"/>`,
		"fallback": "hugeicons:edit-off-03",
	});
}

export default Component;
