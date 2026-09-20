import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1-k6-beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1-k6-beh"/>`,
		"fallback": "stash:divide-light",
	});
}

export default Component;
