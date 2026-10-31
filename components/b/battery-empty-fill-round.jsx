import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubv0g8btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubv0g8btz"/>`,
		"fallback": "coolicons:battery-empty-fill-round",
	});
}

export default Component;
