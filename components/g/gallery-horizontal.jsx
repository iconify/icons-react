import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqyc33b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqyc33b5s"/>`,
		"fallback": "keyline-icons:gallery-horizontal",
	});
}

export default Component;
