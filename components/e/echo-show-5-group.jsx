import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6v85no4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6v85no4l"/>`,
		"fallback": "cbi:echo-show-5-group",
	});
}

export default Component;
