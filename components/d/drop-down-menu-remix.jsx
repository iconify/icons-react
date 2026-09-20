import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxe-m3zen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxe-m3zen"/>`,
		"fallback": "streamline-sharp:drop-down-menu-remix",
	});
}

export default Component;
