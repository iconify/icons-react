import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al428908v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al428908v"/>`,
		"fallback": "mdi:arrange-send-to-back",
	});
}

export default Component;
