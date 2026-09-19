import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ioqzcac_u.css';
import '../../css/y/y-ihjobey.css';
import '../../css/f/f90u8jb6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ioqzcac_u"/><path class="y-ihjobey"/><path class="f90u8jb6k"/></g>`,
		"fallback": "fluent-emoji-flat:high-heeled-shoe",
	});
}

export default Component;
