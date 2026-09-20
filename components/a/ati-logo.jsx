import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p5xbsq8pg.css';
import '../../css/j/jgfk9hifv.css';
import '../../css/v/v7hoivwzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path clip-rule="evenodd" class="p5xbsq8pg"/><path class="jgfk9hifv"/><path clip-rule="evenodd" class="v7hoivwzs"/></g>`,
		"fallback": "streamline-logos:ati-logo",
	});
}

export default Component;
