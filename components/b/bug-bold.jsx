import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mn5ag0w5h.css';
import '../../css/x/xwv9rgb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mn5ag0w5h"/><path class="xwv9rgb-j"/></g>`,
		"fallback": "solar:bug-bold",
	});
}

export default Component;
