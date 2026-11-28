import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g11d8ebst.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hkoz73s2u.css';
import '../../css/f/fis0j1bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g11d8ebst secondary"/><g class="dt0cm9dhy primary"><path class="hkoz73s2u"/><path class="fis0j1bmp"/></g>`,
		"fallback": "iconaut:ear-duo",
	});
}

export default Component;
