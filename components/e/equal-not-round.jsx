import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhxdghb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhxdghb3t"/>`,
		"fallback": "coolicons:equal-not-round",
	});
}

export default Component;
