import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a93zhcbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a93zhcbku"/>`,
		"fallback": "cbi:friends-of-hue-retrotouch-black-chrome",
	});
}

export default Component;
