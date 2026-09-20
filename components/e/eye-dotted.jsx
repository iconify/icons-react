import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7_0c7bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7_0c7bxs"/>`,
		"fallback": "tabler:eye-dotted",
	});
}

export default Component;
