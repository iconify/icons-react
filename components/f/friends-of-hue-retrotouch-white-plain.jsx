import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha_h-qiwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha_h-qiwd"/>`,
		"fallback": "cbi:friends-of-hue-retrotouch-white-plain",
	});
}

export default Component;
