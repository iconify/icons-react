import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqm1pugoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqm1pugoc"/>`,
		"fallback": "thesvg:exercism",
	});
}

export default Component;
