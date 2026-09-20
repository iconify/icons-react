import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qav90nb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qav90nb3v"/>`,
		"fallback": "tabler:device-ipad-exclamation",
	});
}

export default Component;
