import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkx4u2t6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkx4u2t6n"/>`,
		"fallback": "keyline-icons:folders-sharp",
	});
}

export default Component;
