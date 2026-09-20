import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/far40sbuh.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="far40sbuh"/>`,
		"fallback": "jam:backpack-f",
	});
}

export default Component;
