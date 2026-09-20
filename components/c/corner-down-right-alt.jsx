import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzq33dbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzq33dbuf"/>`,
		"fallback": "uil:corner-down-right-alt",
	});
}

export default Component;
