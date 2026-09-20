import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zsfuvunzf.css';
import '../../css/f/f8ickac8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zsfuvunzf"/><path class="f8ickac8b"/></g>`,
		"fallback": "tdesign:city-8",
	});
}

export default Component;
