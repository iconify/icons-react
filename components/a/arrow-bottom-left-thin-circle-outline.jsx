import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzw8d4ipa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzw8d4ipa"/>`,
		"fallback": "mdi:arrow-bottom-left-thin-circle-outline",
	});
}

export default Component;
