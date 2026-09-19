import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd9d9sbrk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd9d9sbrk"/>`,
		"fallback": "f7:burn",
	});
}

export default Component;
