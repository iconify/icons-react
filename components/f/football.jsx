import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/z/zek168lls.css';
import '../../css/y/yge2317oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz wm-a"/><path class="wm-a zek168lls"/><path class="wm-k yge2317oz"/>`,
		"fallback": "withicons-bauhaus:football",
	});
}

export default Component;
