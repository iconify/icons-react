import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy6g1hpqx.css';
import '../../css/i/i79d8sb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yy6g1hpqx"/><path class="i79d8sb9i primary"/></g>`,
		"fallback": "iconaut:arrow-u-turn-down-line-flip-duotone",
	});
}

export default Component;
