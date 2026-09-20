import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4ciipbpv.css';
import '../../css/j/jsm8ux5rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4ciipbpv"/><path class="jsm8ux5rh"/>`,
		"fallback": "stash:headphones-duotone",
	});
}

export default Component;
