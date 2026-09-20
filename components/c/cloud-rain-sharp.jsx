import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywwwdhwxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywwwdhwxw"/>`,
		"fallback": "keyline-icons:cloud-rain-sharp",
	});
}

export default Component;
