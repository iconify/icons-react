import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh4riuv9c.css';
import '../../css/c/cw8brcc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh4riuv9c"/><path class="cw8brcc2n"/>`,
		"fallback": "bxs:bullseye",
	});
}

export default Component;
