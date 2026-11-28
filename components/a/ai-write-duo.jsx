import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl-8_xbfm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-7lzdbyj.css';
import '../../css/a/assf6sbkp.css';
import '../../css/u/ua6v0j9ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl-8_xbfm secondary"/><g class="dt0cm9dhy primary"><path class="m-7lzdbyj"/><path class="assf6sbkp"/><path class="ua6v0j9ye"/></g>`,
		"fallback": "iconaut:ai-write-duo",
	});
}

export default Component;
