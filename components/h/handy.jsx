import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1xyw2e6j.css';
import '../../css/q/qi-a3ui-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1xyw2e6j"/><path class="qi-a3ui-u"/>`,
		"fallback": "token:handy",
	});
}

export default Component;
