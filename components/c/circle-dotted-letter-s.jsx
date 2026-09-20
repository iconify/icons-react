import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma2b6-b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma2b6-b0i"/>`,
		"fallback": "tabler:circle-dotted-letter-s",
	});
}

export default Component;
