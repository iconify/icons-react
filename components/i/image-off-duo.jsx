import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg6xwxgcs.css';
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
		"content": `<path class="eg6xwxgcs secondary"/><g class="dt0cm9dhy primary"><path class="os9nhhb_x"/><path class="lcz2lpl2x"/><path class="adgljtbqx"/></g>`,
		"fallback": "iconaut:image-off-duo",
	});
}

export default Component;
