import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqf30sr5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iqf30sr5g"/>`,
		"fallback": "basil:chrome-outline",
	});
}

export default Component;
