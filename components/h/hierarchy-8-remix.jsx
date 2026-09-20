import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p79z853-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p79z853-i"/>`,
		"fallback": "streamline-sharp:hierarchy-8-remix",
	});
}

export default Component;
