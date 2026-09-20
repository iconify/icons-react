import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tr2bh-5wz.css';
import '../../css/j/jyp7sob8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tr2bh-5wz"/><path class="jyp7sob8c"/></g>`,
		"fallback": "reicon:dumbbells2-duotone",
	});
}

export default Component;
