import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmyb_9bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmyb_9bdh"/>`,
		"fallback": "thesvg-color:carto",
	});
}

export default Component;
