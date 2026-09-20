import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5hhk_blw.css';
import '../../css/x/x03n-xhgu.css';
import '../../css/v/v67m5-lov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5hhk_blw"/><path class="x03n-xhgu"/><path class="v67m5-lov"/>`,
		"fallback": "token:bithumb",
	});
}

export default Component;
