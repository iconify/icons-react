import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzveq5_2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzveq5_2n"/>`,
		"fallback": "ion:camera-reverse-sharp",
	});
}

export default Component;
