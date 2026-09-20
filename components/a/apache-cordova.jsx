import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1kkhe1_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1kkhe1_e"/>`,
		"fallback": "thesvg-color:apache-cordova",
	});
}

export default Component;
