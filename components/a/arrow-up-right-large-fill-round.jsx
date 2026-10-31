import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1b9j_3vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1b9j_3vc"/>`,
		"fallback": "coolicons:arrow-up-right-large-fill-round",
	});
}

export default Component;
