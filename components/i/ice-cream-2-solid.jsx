import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_5ujke2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_5ujke2w"/>`,
		"fallback": "streamline:ice-cream-2-solid",
	});
}

export default Component;
