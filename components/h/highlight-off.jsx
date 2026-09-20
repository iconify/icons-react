import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f85pw7beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f85pw7beh"/>`,
		"fallback": "tabler:highlight-off",
	});
}

export default Component;
