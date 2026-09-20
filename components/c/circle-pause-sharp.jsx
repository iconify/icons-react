import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2hqi_o1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2hqi_o1l"/>`,
		"fallback": "keyline-icons:circle-pause-sharp",
	});
}

export default Component;
