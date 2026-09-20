import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwe0xabgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwe0xabgo"/>`,
		"fallback": "prime:arrows-v",
	});
}

export default Component;
