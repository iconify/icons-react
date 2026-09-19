import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge_g-ku2w.css';
import '../../css/l/lzqod34yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge_g-ku2w"/><path class="lzqod34yu"/>`,
		"fallback": "bx:bx-hdd",
	});
}

export default Component;
