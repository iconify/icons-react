import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv59m1wof.css';
import '../../css/b/b1gg4y6so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mv59m1wof"/><path class="b1gg4y6so"/></g>`,
		"fallback": "coolicons:hand-pointer-duotone-round",
	});
}

export default Component;
