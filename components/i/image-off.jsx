import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/os9nhhb_x.css';
import '../../css/l/lcz2lpl2x.css';
import '../../css/a/adgljtbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="os9nhhb_x"/><path class="lcz2lpl2x"/><path class="adgljtbqx"/></g>`,
		"fallback": "iconaut:image-off",
	});
}

export default Component;
