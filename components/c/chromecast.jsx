import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiljr9b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiljr9b3g"/>`,
		"fallback": "iconoir:chromecast",
	});
}

export default Component;
