import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-up1856y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-up1856y"/>`,
		"fallback": "keyline-icons:command-sharp-duotone",
	});
}

export default Component;
