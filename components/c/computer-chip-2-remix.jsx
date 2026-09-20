import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no5zwqh6z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="no5zwqh6z"/>`,
		"fallback": "streamline:computer-chip-2-remix",
	});
}

export default Component;
