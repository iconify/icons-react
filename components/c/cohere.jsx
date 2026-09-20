import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a04tfwkss.css';
import '../../css/y/yv0epcrue.css';
import '../../css/w/weac8tb3e.css';

const viewBox = {"width":75,"height":75};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a04tfwkss"/><path class="yv0epcrue"/><path class="weac8tb3e"/>`,
		"fallback": "thesvg-color:cohere",
	});
}

export default Component;
