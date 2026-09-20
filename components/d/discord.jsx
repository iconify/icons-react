import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcvv1xbuc.css';

const viewBox = {"width":18,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcvv1xbuc"/>`,
		"fallback": "jam:discord",
	});
}

export default Component;
