import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psvuoo1mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psvuoo1mh"/>`,
		"fallback": "keyline-icons:hand-open-sharp",
	});
}

export default Component;
