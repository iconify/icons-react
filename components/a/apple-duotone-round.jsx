import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wro8qi0xp.css';
import '../../css/a/a6gfxwpje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wro8qi0xp"/><path class="a6gfxwpje"/></g>`,
		"fallback": "coolicons:apple-duotone-round",
	});
}

export default Component;
