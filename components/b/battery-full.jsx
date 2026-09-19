import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1ao6026r.css';
import '../../css/c/cxr0b5brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1ao6026r"/><rect class="cxr0b5brz"/>`,
		"fallback": "circum:battery-full",
	});
}

export default Component;
