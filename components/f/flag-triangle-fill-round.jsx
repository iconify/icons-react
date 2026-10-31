import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5c--obwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5c--obwn"/>`,
		"fallback": "coolicons:flag-triangle-fill-round",
	});
}

export default Component;
