import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrwtnobvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrwtnobvx"/>`,
		"fallback": "meteor-icons:brush",
	});
}

export default Component;
