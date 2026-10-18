import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi2r89w-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi2r89w-e"/>`,
		"fallback": "vadivam:info",
	});
}

export default Component;
