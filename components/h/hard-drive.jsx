import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wclb063ro.css';
import '../../css/l/lzqod34yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wclb063ro"/><path class="lzqod34yu"/>`,
		"fallback": "boxicons:hard-drive",
	});
}

export default Component;
