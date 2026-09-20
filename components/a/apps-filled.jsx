import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9e74ubno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9e74ubno"/>`,
		"fallback": "tabler:apps-filled",
	});
}

export default Component;
